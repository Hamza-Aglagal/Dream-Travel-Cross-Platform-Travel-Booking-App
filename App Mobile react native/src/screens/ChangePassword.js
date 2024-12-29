import {
    View, Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView
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

export default function ChangePassword() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        title='Change Password'
                        titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Avatar.Icon icon="arrow-left"
                                style={{ backgroundColor: theme.icon, }}
                                color={theme.txt} size={40}
                            />
                        </TouchableOpacity>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}>The new password must be different from the current password</Text>
                        </View>

                        <View style={{ paddingTop: 20 }}>
                            <Text style={[style.txt, { color: theme.disable }]}>Password</Text>
                            <View style={[style.txtinput, {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginVertical: 10,
                                backgroundColor: theme.input
                            }]
                            }>
                                <TextInput placeholder='Create a password'
                                    secureTextEntry={!isPasswordVisible}
                                    placeholderTextColor={Colors.intxt}
                                    selectionColor={Colors.primary}
                                    style={{ color: Colors.disable, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }}
                                ></TextInput>
                                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                                    <Icons name={isPasswordVisible ? 'eye-off' : 'eye'} color={theme.txt} size={20} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Icons name='checkmark' size={25} color={'#00C566'} />
                            <Text style={{ color: '#00C566', }}>There must be at least 8 characters</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='checkmark' size={25} color={'#00C566'} />
                            <Text style={{ color: '#00C566', fontFamily: 'PlusJakartaSans-Regular' }}>There must be a unique code like @!#</Text>
                        </View>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[style.txt, { color: theme.disable }]}>Confirm Password</Text>
                            <View style={[style.txtinput, {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginVertical: 10,
                                backgroundColor: theme.input
                            }]
                            }>
                                <TextInput placeholder='Confirm password'
                                    secureTextEntry={!isPassword}
                                    placeholderTextColor={Colors.intxt}
                                    selectionColor={Colors.primary}
                                    style={{ color: Colors.disable, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }}
                                ></TextInput>
                                <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                                    <Icons name={isPassword ? 'eye-off' : 'eye'} color={theme.txt} size={20} />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={{ paddingTop: 100, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                                style={[style.btn]}>
                                <Text style={[style.txt]}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}