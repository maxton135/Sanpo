import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import {
  addWaypoint,
  removeWaypoint,
  selectWaypoints,
} from "../slices/navSlice";

const SearchBar = () => {
  const waypoints = useSelector(selectWaypoints);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        position: "absolute",
        top: "13%",
        width: "80%",
        height: 200,
        left: "10%",
        opacity: 0.9,
      }}
    >
      <View>
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          placeholder="Enter custom location"
          fetchDetails={true}
          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(
              addWaypoint({
                location: details.geometry.location,
                description: data.description,
              })
            );

            //navigation.navigate("ContinueCard");
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
