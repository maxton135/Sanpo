import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "../components/Map";
import { createStackNavigator } from "@react-navigation/stack";
import WaypointsCard from "../components/WaypointsCard";
import ProgressDisplay from "../components/ProgressDisplay";
import SearchBar from "../components/SearchBar";

const CreateAdventureScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={tw`h-1/2`}>
          <Map />
          <SearchBar />
        </View>
      </TouchableWithoutFeedback>
      <View style={tw`h-1/8`}>
        <ProgressDisplay />
      </View>
      <View style={tw`h-3/8`}>
        <Stack.Navigator>
          <Stack.Screen
            name="WaypointsCard"
            component={WaypointsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default CreateAdventureScreen;
