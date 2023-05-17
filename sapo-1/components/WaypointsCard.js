import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
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
  return (
    <View style={tw`bg-white flex-1`}>
      <FlatList
        data={waypoints}
        ItemSeparatorComponent={() => (
          <Icon name="ios-arrow-down" type="ionicon" color="black" size={20} />
        )}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={tw`flex-row items-center p-5 pt-2 pb-2 bg-gray-200 m-1 justify-between rounded-1`}
          >
            <View style={tw`w-7/8 text-center`}>
              <Text style={tw`text-lg`}>{item.description}</Text>
            </View>
            <TouchableOpacity
              style={tw`w-1/8 ml-2`}
              onPress={() => {
                console.log(index);
                dispatch(removeWaypoint(index));
              }}
            >
              <Icon name="close-sharp" type="ionicon" color="black" size={20} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default WaypointsCard;
