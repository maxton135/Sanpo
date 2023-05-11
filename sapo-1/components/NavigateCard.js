import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Where would you like to go first?</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
              placeholder="Enter custom location"
              styles={toInputBoxStyles}
              fetchDetails={true}
              enablePoweredByContainer={false}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
              returnKeyType={"search"}
              onPress={(data, details=null) => {
                dispatch(setDestination({
                    location: details.geometry.location,
                    description: data.description,
                }))

                navigation.navigate('ContinueCard');
              }}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }}
            />
        </View>
      </View>
      <Text style={tw`text-center py-5 text-lg`}>or</Text>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
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