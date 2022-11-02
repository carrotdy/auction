import React, { FunctionComponent } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import FontStyle from '../../screens/styles/Font';
import { Color } from '../../statics/Color';
import Title from '../text/Typography';

interface IProps {
    activeOpacity?: number;
    percentage?: number;
    text?: string;
}

export const FullScreenLoading: FunctionComponent<IProps> = ({
    activeOpacity = 0.7, percentage = 0, text,
}) => {
    return (
        <View style={{ position: 'absolute', backgroundColor: Color.Gray10, zIndex: 10, top: 0, bottom: 0, left: 0, right: 0, opacity: activeOpacity }}>
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
                    {text && <Title text={''} font={FontStyle.bold.font20} />}
                    {percentage > 0 && <Text>{percentage}%</Text>}
            </View>
        </View>
    );
};

