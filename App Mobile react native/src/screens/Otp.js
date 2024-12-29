import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    Modal,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'
import { AppBar } from '@react-native-material/core';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [visible, setVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg ,marginTop: 30}]}>
                    <AppBar
                        color={theme.bg}

                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Avatar.Icon icon="arrow-left"
                                style={{ backgroundColor:theme.icon, }}
                                color={theme.txt} size={45}

                            />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingTop:20}}>
                    <Text style={[style.logintitle,{color:theme.txt,textAlign:'center'}]}>Enter OTP</Text>
                    <Text style={[style.subtxt,{color:theme.disable,textAlign:'center',marginTop:10}]}>We have just sent you 4 digit code via your email <Text style={[style.txt,{color:theme.txt}]}> example@gmail.com</Text></Text>
                </View>
                <View style={{ paddingTop: 20 }}>
                    <OtpInputs
                        Clipboard={Clipboard}
                        numberOfInputs={4}
                        selectionColor={Colors.primary}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                        inputStyles={{
                            
                            borderColor: Colors.primary,
                            backgroundColor: theme.bg,
                            borderRadius: 20,
                            textAlign: 'center',
                            height: 50,
                            width: 50,
                            fontSize: 20,
                            borderWidth: 1,
                            color: theme.txt,
                            fontFamily: 'PlusJakartaSans-Bold'
                        }}
                    />
                </View>
                <View style={{ paddingTop: 20 }}>
                        <TouchableOpacity style={[style.btn]}
                        onPress={() => setVisible(true)}
                        >
                            <Text style={[style.txt]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingTop:20,flexDirection:'row',justifyContent:'center'}}>
                        <Text style={[style.txt,{color:theme.txt,}]}>Didn't receive code ? </Text>
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={[style.txt,{color:Colors.primary}]}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
            <Modal transparent={true}
                        visible={visible}>
                            <View style={{
                            width: width,
                            flex: 1,
                            backgroundColor:'#000000aa',
                            transparent:'true',
                        }}>
                            <View style={[style.modalcontainer,{backgroundColor:theme.bg,paddingHorizontal:20}]}>
                            <Image source={require('../../assets/image/success.png')}
                            style={{width:width/4.5,height:height/10,resizeMode:'stretch',alignSelf:'center'}}
                            />
                            <View style={{ paddingTop: 15 }}>
                                    <Text style={[style.title, { color: theme.txt, textAlign: 'center' }]}>You have logged in successfully</Text>
                                </View>
                                <View style={{ paddingTop: 15 }}>
                                    <Text style={[style.txt, { textAlign: 'center',color:theme.disable }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                </View>
                                <View style={{ paddingTop: 20, marginBottom:20}}>
                                    <TouchableOpacity style={style.btn}
                                        onPress={ ()=>{setVisible(false); navigation.navigate('MyTabs');}}
                                    >
                                        <Text style={style.btntxt}>Continue</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        </Modal>
        </SafeAreaView>
    )
}