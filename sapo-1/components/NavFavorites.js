import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "3",
    title: "Cindy's Favorite Route",
    icon: "walk-outline",
  },
  {
    id: "4",
    title: "Mark's Dog Walking Route",
    icon: "walk-outline",
  },
  {
    id: "5",
    title: "Steven's Morning Walk",
    icon: "walk-outline",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.title}</Text>
            <Text style={tw`text-gray-500`}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
