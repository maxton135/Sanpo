import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import yelp_search from "../api_config/yelp";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFocusMarker,
  setFoodStops,
  addFoodStop,
} from "../slices/navSlice";

const data = [
  {
    type: "Cafes",
    icon: "fast-food",
    search_term: "cafe",
  },
  {
    type: "Sandwiches",
    icon: "fast-food",
    search_term: "sandwich",
  },
  {
    type: "Drinks",
    icon: "fast-food",
    search_term: "smoothie",
  },
];

const FoodStopsCard = () => {
  const focusMarker = useSelector(selectFocusMarker);
  const dispatch = useDispatch();
  return (
    <View style={tw`bg-white flex-1`}>
      {!focusMarker && (
        <View style={tw`w-3/4 h-3/4 m-auto`}>
          <Icon
            name="fast-food"
            type="ionicon"
            color="rgb(209 213 219)"
            size={50}
          />
          <Text style={tw`font-semibold text-xl text-gray-300 text-center`}>
            {"Search and add food stops!"}
          </Text>
          <Text style={tw`font-semibold text-lg text-gray-300 text-center`}>
            {"Click on a pin to view nearby food stops"}
          </Text>
        </View>
      )}
      {focusMarker && (
        <View style={tw`flex-1`}>
          <Text>{focusMarker.description}</Text>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={tw`flex-row w-7/8 h-10 bg-orange-200 p-3 m-auto mb-2 rounded-full`}
                onPress={() => {
                  const yelp_data = yelp_search(
                    focusMarker.location,
                    item.type,
                    "5"
                  );
                  console.log(yelp_data);
                  //console.log(yelp_data);
                  /*
                  for (const business of yelp_data.businesses) {
                    
                    dispatch(
                      addFoodStop({
                        id: business.id,
                        location: business.coordinates,
                        name: business.name,
                        price: business.price,
                        rating: business.rating,
                      })
                    );
                    
                    console.log(business);
                  }
                  */
                }}
              >
                <Icon
                  name={item.icon}
                  type="ionicon"
                  color="black"
                  size={5}
                  style={tw`m-auto ml-10`}
                />
                <Text style={tw`text-sm m-auto font-semibold`}>
                  {item.type}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default FoodStopsCard;

const styles = StyleSheet.create({});
