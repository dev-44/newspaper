import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import Animation from './Animation';

const Stack = createStackNavigator()

/* type MyStackParamList = {
  Details: { url: string };
}; */

const App: React.FC = (): JSX.Element => {
    return (
        <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
          }}>
          <Stack.Screen name='Home' component={Home} options={{ title: 'News' }} />
          <Stack.Screen
            name='Details'
            component={Details}
            options={{                 
              title: 'Details',
              ...Animation
            }}
            initialParams={{ url: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App
