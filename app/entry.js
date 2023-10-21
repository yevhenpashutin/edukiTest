import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './containers/home';
import ItemDetails from './containers/itemDetails';

const EntryPoint = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default EntryPoint;
