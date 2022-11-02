import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MainBottomTabNavigatior from './MainBottomTabNavigatior';

const Stack = createStackNavigator();

export const FullScreenStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='MainBottomTabNavigatior' screenOptions={({ route, navigation }) => ({
            headerShown: false, gestureEnabled: true, ...TransitionPresets.SlideFromRightIOS,
        })}>
            <Stack.Screen name="MainBottomTabNavigatior" component={MainBottomTabNavigatior} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

 