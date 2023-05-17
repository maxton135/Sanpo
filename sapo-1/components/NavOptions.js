import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectWaypoints } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Go Sanpo",
    image: "https://links.papareact.com/3pn",
    screen: "QuestScreen",
  },
  {
    id: "456",
    title: "Create Adventure",
    image: "https://links.papareact.com/28w",
    screen: "CreateAdventureScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const waypoints = useSelector(selectWaypoints);

  return (
    <FlatList
      data={data}
      horizontal
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
