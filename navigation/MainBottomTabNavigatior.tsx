import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Map } from '../screens/map/Map';
import { Home } from '../screens/home/Home';
import { Interest } from '../screens/interest/Interest';
import { Mypage } from '../screens/mypage/Mypage';
import { TabBar } from './TabBar';

const Tab = createBottomTabNavigator();

export default function MainBottomTabNavigatior() {
    return (
        <Tab.Navigator initialRouteName={'Home'} tabBar={props => <TabBar {...props} />}
            backBehavior={'none'}>
            <Tab.Screen name="홈" component={Home} options={{ headerShown: false, }}/>
            <Tab.Screen name="지도" component={Map} />
            <Tab.Screen name="내관심" component={Interest} />
            <Tab.Screen name="마이페이지" component={Mypage} />
        </Tab.Navigator>
    );
};
