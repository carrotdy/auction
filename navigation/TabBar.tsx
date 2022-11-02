import React from 'react';
import { Image, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ImageSet } from '../screens/images';
import { Color } from '../statics/Color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontStyle from '../screens/styles/Font';
import Title from '../components/text/Typography';

export const TabBar = ({ state, navigation }) => {
    const insets = useSafeAreaInsets();
    
    const {
        home,
        homeActive,
        map,
        mapActive,
        interest,
        interestActive,
        myPage,
        myPageActive
    } = ImageSet.BottomTab;

    const getIcon = (name: string, focused: boolean) => {
        if (name === '홈') {
            if (!focused) return home;
            return homeActive;
        } else if (name === '지도') {
            if (!focused) return map
            return mapActive;
        } else if (name === '내관심') {
            if (!focused) return interest
            return interestActive;
        } else if (name === '마이페이지') {
            if (!focused) return myPage
            return myPageActive;
        }
    }
    return (
        <Container style={{ height: 65 + insets.bottom }}>
            <StatusBar /> 
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;
                const icon = getIcon(route.name, isFocused);
        
                const onPress = () => {
                    const event = navigation.emit({
                    type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };
        
                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1, alignItems: 'center'}}
                    >
                        <Image source={icon} />
                        <Title text={route.name} font={FontStyle.regular.font11} style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                );
            })}
        </Container>
    );
};

const Container = styled.View({
    flexDirection: 'row',
    backgroudColor: Color.Gray10,
    borderTopWidth: 0.5,
    borderTopColor: Color.Gray40,
    paddingTop: 12,
})

