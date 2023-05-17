import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import {
  addWaypoint,
  removeWaypoint,
  selectWaypoints,
  selectOrigin,
} from "../slices/navSlice";

const WaypointsCard = () => {
  const origin = useSelector(selectOrigin);
  const waypoints = useSelector(selectWaypoints);
  const dispatch = useDispatch();
  return {
    <Text>Hi</Text>
  };
};

export default WaypointsCard;

/*
<TouchableOpacity
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        onPress={() => {
          dispatch(removeWaypoint(waypoints.length - 1));
        }}
        disabled={waypoints.length == 0}
      >
        <View style={waypoints.length == 0 && tw`opacity-20`}>
          <Text style={tw`mt-2 text-lg font-semibold`}>Undo</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
        </View>
      </TouchableOpacity>
*/
