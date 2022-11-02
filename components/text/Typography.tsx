import React from 'react';
import { StyleProp, Text, TextProps, TextStyle, View } from 'react-native';
import { Color } from '../../statics/Color';
import { ConfigType } from '../types/ConfigType';

interface IProps {
    text: string | number;
    font: ConfigType.FontType;
    color?: Color | string;
    config?: TextProps;
    style?: StyleProp<TextStyle>;
}

const Title = (props: IProps) => {
    const { text, font, color = Color.Gray80, config, style, } = props;

    return (
        <View>
            <Text {...config} allowFontScaling={false} style={[font, { color: color }, style]}>{text}</Text>
        </View>
    )
}

export default Title