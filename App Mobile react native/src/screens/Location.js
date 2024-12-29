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
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Location() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>

            <ImageBackground source={theme.location} resizeMode='stretch'
                style={{ height: height, width: width, marginTop: -60 ,backgroundColor:theme.bg}}>
                <View style={{ marginHorizontal: 20, marginTop: 70,flex: 0.5  }}>
                    <AppBar
                        color={theme.bg}
                        title='Airport'
                        titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Avatar.Icon icon="arrow-left"
                                style={{ backgroundColor: theme.icon, }}
                                color={theme.txt} size={40}
                            />
                        </TouchableOpacity>
                        } />
                </View>
                <View style={{ backgroundColor: theme.bg, flex: 0.5, }}>
                    <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                        <AppBar
                            color={theme.bg}
                            title='List Location'
                            titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                            centerTitle={true}
                            elevation={0}
                            leading={<TouchableOpacity >
                                <Avatar.Icon icon="close"
                                    style={{ backgroundColor: theme.icon, }}
                                    color={theme.txt} size={40}
                                />
                            </TouchableOpacity>
                            }
                        />
                        <ScrollView showsVerticalScrollIndicator={false}>

                            <TouchableOpacity onPress={() => navigation.navigate('Location2')}>
                                <View style={{ paddingTop: 20, flexDirection: 'row', width: width / 1.3, }}>
                                    <Image source={require('../../assets/image/l1.png')} resizeMode='stretch'
                                        style={{ height: height / 8, width: width / 4 }}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>San Francisco International Airport</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                            <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                            <Text style={[style.subtxt, { color: theme.disable, }]}>(32)</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Icons name='location' color={theme.disable1} size={15} />
                                            <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>San Francisco, Amerika Serikat</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Location2')}>
                                <View style={{ paddingTop: 20, flexDirection: 'row', width: width / 1.3, }}>
                                    <Image source={require('../../assets/image/l2.png')} resizeMode='stretch'
                                        style={{ height: height / 8, width: width / 4 }}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>Bandar Udara Internasional Oakland</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                            <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                            <Text style={[style.subtxt, { color: theme.disable, }]}>(32)</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Icons name='location' color={theme.disable1} size={15} />
                                            <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>Oakland, Amerika Serikat</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Location2')}>
                                <View style={{ paddingTop: 20, flexDirection: 'row', width: width / 1.3, marginBottom: 80 }}>
                                    <Image source={require('../../assets/image/l3.png')} resizeMode='stretch'
                                        style={{ height: height / 8, width: width / 4 }}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>Silicon Valley Airport shuttle & Taxi Service</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                            <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                            <Text style={[style.subtxt, { color: theme.disable, }]}>(32)</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Icons name='location' color={theme.disable1} size={15} />
                                            <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>San Francisco, Amerika Serikat</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}