import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar } from 'react-native'
import React, { useState, useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SelectExplore() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 30 }]}>
                <Text style={[style.logintitle, { color: theme.txt, marginTop: 20 }]}>Where is your dream vacation?</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', flex: 1, marginVertical: 20 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Items1.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 4 }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20, }}>
                                <Image source={require('../../assets/image/Items2.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 5.5 }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20 }}>
                                <Image source={require('../../assets/image/Items5.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 5 }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20, }}>
                                <Image source={require('../../assets/image/Items6.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 5.5 }}></Image>
                            </TouchableOpacity>

                        </View>
                        <View style={{ margin: 10 }}></View>
                        <View style={{ flex: 1 }}>

                            <TouchableOpacity>
                                <Image source={require('../../assets/image/Items3.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 5 }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20 }}>
                                <Image source={require('../../assets/image/Items.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 5.5 }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20 }}>
                                <Image source={require('../../assets/image/Items4.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 4 }}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ marginTop: 20 }}>
                                <Image source={require('../../assets/image/Items7.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 2.37, height: height / 5.5 }}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
                <View style={[style.btn, { position: 'absolute', bottom: 30, width: width - 40, height: 55 }]}>
                    <Text style={style.btntxt}>Continue</Text>
                </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}