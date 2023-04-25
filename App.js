import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'News' }} />
        <Stack.Screen name='Details' component={DetailsScreen} options={ ({ route }) => ({ title: 'Details' })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
