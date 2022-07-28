import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../../screens/MainScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation(props) {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerShown: false         
           }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}