import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Dimensions ,ScrollView,KeyboardAvoidingView} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-elements';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function HelpSupport() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
        <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Help and Support'
                    titleStyle={{ color: theme.txt, }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon }}
                            color={theme.txt} size={45}
                        />
                    </TouchableOpacity>
                    } />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop:10}}>
                    <View style={[style.inputContainer, { backgroundColor: theme.input }]}>
                        <Icon name="search" size={20} color={Colors.disable} />
                        <TextInput placeholder="search"
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.disable}
                            style={{ flex: 1, color: Colors.active, fontFamily: 'PlusJakartaSans-Regular' }} />
                        <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 10 }]}></View>
                        <TouchableOpacity >
                            <Image source={theme.filter}
                                style={{ width: width / 20, height: height / 40 }}></Image>

                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,marginTop:20}}>
                    <Text style={[style.txt1, { color: theme.txt,  }]}>Lorem ipsum dolor sit amet</Text>
                    <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
                </View>
                <View style={style.divider1}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[style.txt1, { color: theme.txt,  }]}>Lorem ipsum dolor sit amet</Text>
                    <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
                </View>
                <View style={style.divider1}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[style.txt1, { color: theme.txt,  }]}>Lorem ipsum dolor sit amet</Text>
                    <Icon name='chevron-up' size={20} color={theme.txt} ></Icon>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={style.subtxt}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                </View>
                <View style={style.divider1}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[style.txt1, { color: theme.txt,  }]}>Lorem ipsum dolor sit amet</Text>
                    <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
                </View>
                <View style={style.divider1}></View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',marginBottom:20 }}>
                    <Text style={[style.txt1, { color: theme.txt,  }]}>Lorem ipsum dolor sit amet</Text>
                    <Icon name='chevron-down' size={20} color={theme.txt} ></Icon>
                </View>
                </ScrollView>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}