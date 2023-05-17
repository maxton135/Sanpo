import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  selectWaypoints,
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

  const mapRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || waypoints.length == 0) return;

    let identifiers = ["origin"];
    for (let i = 0; i < waypoints.length; i++) {
      identifiers.push("marker" + i);
    }

    mapRef.current.fitToSuppliedMarkers(identifiers, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, waypoints]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
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

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

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
