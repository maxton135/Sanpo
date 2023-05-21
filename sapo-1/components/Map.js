import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  selectWaypoints,
  setFocusMarker,
  selectFoodStops,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  // const focusMarker = useSelector(selectFocusMarker);
  const waypoints = useSelector(selectWaypoints);
  const foodStops = useSelector(selectFoodStops);

  const mapRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (waypoints.length == 0) return;

    let identifiers = [];
    for (let i = 0; i < waypoints.length; i++) {
      identifiers.push("marker" + i);
    }

    mapRef.current.fitToSuppliedMarkers(identifiers, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [waypoints]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.7749,
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {/*origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="green"
        />
      )*/}

      {/*origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
        )*/}

      {waypoints.length > 0 &&
        waypoints.map(({ location, description }, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: location.lat,
                longitude: location.lng,
              }}
              title={description}
              identifier={"marker" + index}
              onPress={() => {
                dispatch(
                  setFocusMarker({
                    location: location,
                    description: description,
                  })
                );
              }}
            />
          );
        })}

      {foodStops.length > 0 &&
        foodStops.map((business, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: business.location.lat,
                longitude: business.location.lng,
              }}
              title={business.name}
              identifier={"foodstop" + index}
              onPress={() => {
                console.log("Pressed FoodStop marker");
              }}
            />
          );
        })}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
