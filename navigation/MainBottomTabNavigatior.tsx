import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Auction } from '../screens/auction/Auction';
import { Home } from '../screens/home/Home';
import { Interest } from '../screens/interest/Interest';
import { Mypage } from '../screens/mypage/Mypage';
import { TabBar } from './TabBar';

const Tab = createBottomTabNavigator();

export default function MainBottomTabNavigatior() {
    return (
        <Tab.Navigator initialRouteName={'Home'} tabBar={props => <TabBar {...props} />}
            backBehavior={'none'}>
            <Tab.Screen name="홈" component={Home} />
            <Tab.Screen name="매물" component={Auction} />
            <Tab.Screen name="내관심" component={Interest} />
            <Tab.Screen name="내정보" component={Mypage} />
        </Tab.Navigator>
    );
};
