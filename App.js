import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainBottomTabNavigatior from './navigation/MainBottomTabNavigatior';

export default function App() {
  return (
    <NavigationContainer>
      <MainBottomTabNavigatior />
    </NavigationContainer>
  );
}