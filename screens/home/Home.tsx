import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { SafeContainer } from '../../components/container/SafeContainer';
import { HomeType } from '../../components/types/HomeType';
import { Color } from '../../statics/Color';

export const Home = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const onChangeSearch = (product: string) => {
        setSearchQuery(product);
    }

    return (
        <SafeContainer style={{ backgroundColor: Color.White, paddingHorizontal: 20, paddingVertical: 20}}>
            <Searchbar value={searchQuery} placeholder="경매 물건을 검색해보세요" onChangeText={onChangeSearch} style={{ width: '100%', borderRadius: 10 }} /> 
            <View style={{ backgroundColor: Color.Gray30, height: 150, borderRadius: 5, marginTop: 10, flex:1}}>
                {Object.values(HomeType.Product).map((type, index) => {
                    return (
                        <Text key={index} style={{flex:1, flexDirection:'row'}}>
                            {type}
                        </Text>
                    )
                })}
            </View>
        </SafeContainer>
    );
};
