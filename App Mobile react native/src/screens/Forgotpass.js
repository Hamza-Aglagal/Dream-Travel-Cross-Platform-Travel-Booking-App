import {
    View, Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import React,{useContext,useState} from 'react'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';


export default function Forgotpass() {
    const navigation=useNavigation();
    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState(false)

    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:10}]}>
           {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}/> */}
           <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>

           
           <AppBar
                color={theme.bg}
                elevation={0}
                leading={<TouchableOpacity onPress={()=>navigation.navigate('Login')} >
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor:theme.icon,}}
                        color={theme.txt} size={45}
                    />
                </TouchableOpacity>
                }
            />

            <View style={{ paddingTop: 20 }}>
                <Text style={[style.logintitle, { textAlign: 'center',color:theme.txt }]}>Forgot Password</Text>
                <Text style={[style.subtxt, { textAlign: 'center',color:theme.disable }]}>Recover your account password</Text>
            </View>
            <View style={{  paddingTop: 30 }}>
                <Text style={[style.txt1, { color:Colors.disable1}]}>Email</Text>
                <View style={{ paddingTop: 10 ,}}>
                    <TextInput placeholder='Enter your email '
                        placeholderTextColor={Colors.intxt}
                        style={[style.txtinput,{fontFamily:'PlusJakartaSans-Regular',backgroundColor:theme.input}]}
                    />
                </View>
                <View style={{paddingTop:20}}>
                    <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate('NewPassword')} >
                        <Text style={style.btntxt}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    )
}