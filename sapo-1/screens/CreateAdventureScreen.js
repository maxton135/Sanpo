import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';

const CreateAdventureScreen = () => {
  const Stack = createStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
            <Stack.Screen 
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default CreateAdventureScreen