import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ButtonScreen from './screens/ButtonScreen';
import TextInputScreen from './screens/TextInputScreen';
import CardScreen from './screens/CardScreen';
import IconScreen from './screens/IconScreen';
import AvatarScreen from './screens/Avatar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Button" component={ButtonScreen} />
        <Tab.Screen name="Text Input" component={TextInputScreen} />
        <Tab.Screen name="Card" component={CardScreen} />
        <Tab.Screen name="Icon" component={IconScreen} />
        <Tab.Screen name="Avatar" component={AvatarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
