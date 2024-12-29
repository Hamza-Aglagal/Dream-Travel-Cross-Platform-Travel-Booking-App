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
import ReviewHook from '../Hook/Review-hook'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Review() {


    const [AvisDestination, id] = ReviewHook()

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>


            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>


                <AppBar
                    color={theme.bg}
                    title='Review'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon, }}
                            color={theme.txt} size={40}
                        />
                    </TouchableOpacity>
                    } />


                <ScrollView showsVerticalScrollIndicator={false}>


                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../../assets/image/alenzo.png')}
                            resizeMode='stretch'
                            style={{ height: height / 17, width: width / 8 }}></Image>
                        <View style={{ marginHorizontal: 10, flex: 1 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Alenzo Endera</Text>
                                <Text style={[style.subtxt, { color: theme.disable }]}>24 Nov 2022</Text>
                            </View>
                            <Text style={[style.subtxt, { fontSize: 12 }]}>⭐⭐⭐⭐⭐</Text>
                        </View>

                    </View>

                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 10, lineHeight: 18, marginLeft: 55 }]}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>

                    <Image source={require('../../assets/image/bed2.png')} resizeMode='stretch'
                        style={{ height: height / 8, width: width / 4, marginLeft: 55, marginTop: 8 }}
                    /> */}


                    {

                        AvisDestination.length > 0 ? AvisDestination.map((item, index) => (
                            <View key={index}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                    <Image source={require('../../assets/image/Jhone.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 17, width: width / 8 }}></Image>
                                    <View style={{ marginHorizontal: 10, flex: 1 }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>
                                                {item.id_user.prenom} {item.id_user.nom}
                                            </Text>
                                            <Text style={[style.subtxt, { color: theme.disable }]}>
                                                {item.date || 'Date not available'}
                                            </Text>
                                        </View>
                                        <Text style={[style.subtxt, { fontSize: 12 }]}>
                                            {`⭐${'⭐'.repeat(parseInt(item.rating) - 1)}`}
                                        </Text>
                                    </View>

                                </View>

                                <Text style={[style.subtxt, { color: theme.txt, marginTop: 10, lineHeight: 18, marginLeft: 55 }]}>
                                    {item.commentaire}
                                </Text>


                            </View>

                        )) : <Text style={{ color: theme.txt, marginTop: 50, lineHeight: 18, marginLeft: 135, fontWeight:'bold' }}>
                            No comment
                        </Text>


                    }



                </ScrollView>
            </View>
        </SafeAreaView>
    )
}