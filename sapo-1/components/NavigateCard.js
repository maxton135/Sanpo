import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "1",
    title: "Parks",
    image: "https://links.papareact.com/3pn",
    icon: "tree",
    color: "green",
  },
  {
    id: "2",
    title: "Sites",
    image: "https://links.papareact.com/28w",
    icon: "flag",
    color: "red",
  },
  {
    id: "3",
    title: "Food",
    image: "https://links.papareact.com/28w",
    icon: "bowl",
    color: "yellow",
  },
];

const NavigateCard = () => {
  const [inInput, setInInput] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>
        Where would you like to go first?
      </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Enter custom location"
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            returnKeyType={"search"}
            onClick={() => setInInput(true)}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate("ContinueCard");
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

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

{
  /*<View style={{ display: "none" }}>
        <Text style={tw`text-center py-4 text-lg`}>or find nearby</Text>
        <FlatList
          horizontal
          scrollEnabled={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`content-center rounded-2 p-4 bg-${item.color}-200 m-2 w-27.2`}
            >
              <View style={tw`flex-2`}>
                <Icon
                  style={tw`p-2 bg-black rounded-full mt-4 w-full`}
                  name={item.icon}
                  type="entypo"
                  color="white"
                  size={18}
                />
              </View>
              <View style={tw``}>
                <Text style={tw`text-center font-semibold text-3xl`}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
          */
}
