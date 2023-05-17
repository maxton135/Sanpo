import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const ContinueCard = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex flex-col h-full`}>
      <TouchableOpacity
        style={tw`bg-green-200 grow`}
        onPress={() => navigation.navigate("NavigateCard")}
      >
        <Text style={tw`font-semibold text-2xl text-center m-auto`}>
          Add more stops to your Sanpo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={tw`bg-red-200 grow`}>
        <Text style={tw`font-semibold text-2xl text-center m-auto`}>
          Finish Planning
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueCard;

const styles = StyleSheet.create({});
