import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Language1() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Language'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon, }}
                            color={theme.txt} size={40}
                        />
                    </TouchableOpacity>
                    } />
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={{ marginTop: 20, borderColor: Colors.bord, borderWidth: 1, paddingHorizontal: 20, paddingVertical: 30, borderRadius: 15 }}>
                        <Text style={{ fontSize: 12, color: Colors.disable, fontWeight: '600', fontFamily: 'PlusJakartaSans-Regular' }}>Suggested Languages</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>English (UK)</Text>
                            <Avatar.Icon icon="check"
                                style={{ backgroundColor: Colors.primary, }}
                                color='white' size={30}
                            />
                        </View>

                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>English</Text>

                        </View>
                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Bahasa Indonesia</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 30, borderColor: Colors.bord, borderWidth: 1, paddingHorizontal: 20, borderRadius: 15 ,paddingVertical:20,marginBottom:30}}>
                        <Text style={{ fontSize: 12, color: Colors.disable, fontWeight: '600', fontFamily: 'PlusJakartaSans-Regular' }}>Other Languages</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Chineses</Text>
                        </View>
                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Croatian</Text>

                        </View>
                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Czech</Text>
                        </View>
                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Danish</Text>

                        </View>
                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Filipino</Text>

                        </View>
                        <View style={style.divider1}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.txt1, { color: theme.txt, }]}>Finland</Text>

                        </View>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}