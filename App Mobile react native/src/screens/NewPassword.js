import {
    View, Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import React, { useState,useContext } from 'react'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';



export default function NewPassword() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState(false)


    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:10}]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
           {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}/> */}
           <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
            
            <AppBar
                color={theme.bg}
                elevation={0}
                leading={<TouchableOpacity onPress={() => navigation.navigate('Forgotpass')}>
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor: theme.icon, }}
                        color={theme.txt} size={45}
                        
                    />
                </TouchableOpacity>
                }
            />

            <View style={{ paddingTop: 20 }}>
                <Text style={[style.logintitle, { textAlign: 'center' ,color:theme.txt }]}>Create a </Text>
                <Text style={[style.logintitle, { textAlign: 'center',color:theme.txt,lineHeight:30  }]}>New Password</Text>
                <Text style={[style.subtxt, { textAlign: 'center',marginTop:10 }]}>Enter your new password</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingTop: 15 }}>
                <Text style={[style.txt1, {  color: Colors.disable, }]}>Password</Text>
                <View style={[style.txtinput, {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical:10,
                    backgroundColor:theme.input
                }]
                }>
                    <TextInput placeholder='Create a password'
                        secureTextEntry={!isPasswordVisible}
                        placeholderTextColor={Colors.intxt}
                        style={{color:Colors.disable, fontFamily:'PlusJakartaSans-Regular',flex:1}}
                    ></TextInput>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icons name={isPasswordVisible ? 'eye-off' : 'eye'} color={theme.txt} size={20} />
                    </TouchableOpacity>

                </View>
                <Text style={[style.txt1, {color: Colors.disable, paddingVertical: 10 }]}>Confirm Password</Text>
                <View style={[style.txtinput, {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor:theme.input
                }]
                }>
                    <TextInput placeholder='Confirm Password'
                        secureTextEntry={!isPassword}
                        placeholderTextColor={Colors.intxt}
                        style={{color:Colors.disable, fontFamily:'PlusJakartaSans-Regular',flex:1}}
                    />
                    <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                            <Icons name={isPassword ? 'eye-off' : 'eye'} color={theme.txt} size={20} />
                        </TouchableOpacity>

                </View>
                <View style={{ paddingTop: 30 ,marginBottom:20}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')} 
                    style={style.btn}>
                        <Text style={style.btntxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView> 
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}