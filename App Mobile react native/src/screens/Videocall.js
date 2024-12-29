import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    ImageBackground,
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
// import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Videocall() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ImageBackground source={require('../../assets/image/Video.png')}
                resizeMode='stretch'
                style={{ height: height / 1.3, width: width }}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30, marginHorizontal: 20 }}>
                    <View style={{ paddingVertical: 10, borderRadius: 30, backgroundColor: Colors.active, flexDirection: 'row',alignItems:'center' }}>
                        <Image source={require('../../assets/image/alenzo.png')} resizeMode='stretch'
                        style={{height:height/20,width:width/9,marginLeft:10}}/>
                        <View style={{marginLeft:5}}>
                            <Text style={[style.txt,{color:theme.disable}]}>Richar Kandowen</Text>
                            <Text style={[style.subtxt,{color:theme.disable}]}>Tour guide, sweden</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <View style={{backgroundColor:'red',borderRadius:10,height:5,width:5}}></View>
                                <Text style={[style.subtxt,{color:theme.disable,marginHorizontal:10}]}>07.23</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: theme.bg, flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <TouchableOpacity >
                            <Avatar.Icon icon="microphone-outline"
                                style={{ backgroundColor: '#E3E9ED', }}
                                color={theme.txt} size={45} />
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Avatar.Icon icon="volume-high"
                                style={{ backgroundColor: '#E3E9ED', }}
                                color={theme.txt} size={45} />
                        </TouchableOpacity>

                        <TouchableOpacity >
                            <Avatar.Icon icon="video-outline"
                                style={{ backgroundColor: '#E3E9ED', }}
                                color={theme.txt} size={45} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                            <Avatar.Icon icon="phone-hangup-outline"
                                style={{ backgroundColor: '#E53935', }}
                                color={Colors.secondary} size={45} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}