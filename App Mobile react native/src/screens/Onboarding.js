import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import IntroItem from './IntroItem'
import Slides from './Slides'
import { Avatar } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Onboarding() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={{ width: width, flex: 1 }}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <View style={{ flex: 1.3, backgroundColor: theme.bg, }}>
                <Image source={require('../../assets/image/finalonbor.png')} style={{ width: width, height: height / 1.8, resizeMode: 'stretch' }} />
            </View>

            <View style={{ flex: 0.9, backgroundColor: theme.bg }}>
                <View style={{ marginHorizontal: 20, }} >
                    <Text style={[style.title, { textAlign: 'center', color: theme.txt }]}>We are here to make your holiday easier</Text>
                    <View style={{ paddingTop: 15 }}>
                        {/* <Text style={[style.txt, { color: theme.disable, textAlign: 'center' }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}
                    </View>
                    <View style={{ paddingTop: 15 }}>
                        <TouchableOpacity style={[style.btn]}
                        onPress={() => navigation.navigate('Language')}
                        >
                            <Text style={[style.txt]}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop:15,flexDirection:'row',justifyContent:'center',paddingBottom:15}}>
                        <Text style={[style.txt,{color:theme.txt,}]}>Dont't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={[style.txt,{color:Colors.primary}]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}