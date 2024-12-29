import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'

import { SliderBox } from "react-native-image-slider-box";



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function AttractionDetail() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
        require('../../assets/image/bed1.png'),
    ]


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            {/* <View style={[style.main,{backgroundColor:theme.bg}]}> */}
            <StatusBar backgroundColor="transparent" translucent={true} />


            <View>

                 

                <View style={{ width: width, height: height / 2, }}>



                    <AppBar
                        style={{ width: width, backgroundColor: 'transparent', boxShadow: 'none', marginTop: 35, marginHorizontal: 20, justifyContent: 'center', position: 'absolute' }}
                        title="Attraction Details"
                        titleStyle={{ fontFamily: 'PlusJakartaSans-Bold' }}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()} >
                            <Avatar.Icon icon="arrow-left"
                                style={{ backgroundColor: 'transparent', }}
                                color={Colors.secondary} size={45}
                            />
                        </TouchableOpacity>
                        }
                    />

                    <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#009B8D"
                        inactiveDotColor="#FFFFFF"
                        dotStyle={{
                            width: 15,
                            height: 15,
                            borderRadius: 15,
                            marginHorizontal: 3,
                            padding: 0,
                            margin: 0,
                            marginBottom: 29
                        }}
                        style={{ height: height / 2 }}
                    />

                </View>

            </View>


            {/* <View style={{backgroundColor:theme.bg,flex:1,borderTopLeftRadius:20,borderTopRightRadius:20}}> */}
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: -30, borderTopLeftRadius: 40, borderTopRightRadius: 40, marginHorizontal: -5 }]}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={[style.subtitle, { color: theme.txt }]}>The Lalit New Delhi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='location' color={theme.disable} size={18}></Icon>
                                <Text style={[style.subtxt, { color: theme.disable1, fontSize: 12, marginHorizontal: 5 }]}>Uttar Pradesh, India</Text>
             
                            </View>
                        </View>
                        <View style={[style.favorite, { backgroundColor: theme.icon }]}>
                            <Icon name={'heart'} size={22}
                                color={'#E53935'}
                            />
                        </View>
                    </View>

                 
 
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginTop: 30 }]}>Details</Text>
                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 5 }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. <Text style={{ color: Colors.primary }}>More Detail</Text></Text>

                    

                    
 
                     <Image source={theme.hotelLocation}
                        resizeMode='stretch'
                        style={{ height: height / 3.5, width: width - 40, marginVertical: 20 }}></Image>
                </ScrollView>

            </View>
            
            <View style={{ backgroundColor: theme.bg, paddingVertical: 20, paddingHorizontal: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderColor: Colors.border, borderWidth: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.title, { color: Colors.active }]}>$250</Text>
                        <Text style={[style.subtxt, { color: '#E53935', marginRight: 10, fontSize: 12 }]}>$312</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('BookHotel')}
                        style={[style.btn, { flex: 1 }]}>
                        <Text style={[style.btntxt]}> Add Activite</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </SafeAreaView>
    )
}