import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Image
} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function IntroItem({ item }) {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={{ width: width }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ flex: 1.5,backgroundColor:theme.bg}}>
                <Image source={item.bg} style={{ width: width, height: height / 1.7,resizeMode:'stretch' }} />
            </View>
            <View style={{flex:0.58,paddingTop:20,backgroundColor:theme.bg}}>
            <View style={{marginHorizontal:20}} >
                <Text style={[style.title,{textAlign:'center',color:theme.txt}]}>{item.title1}</Text>
                <View style={{ paddingTop: 15 }}>
                    <Text style={[style.subtxt,{color:theme.disable,textAlign:'center'}]}>{item.subtitle}</Text>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}