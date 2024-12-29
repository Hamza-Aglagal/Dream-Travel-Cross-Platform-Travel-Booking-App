import {
    View, Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    Modal,
    Keyboard
} from 'react-native'
import React, { useState, useContext, useRef, useEffect } from 'react'
import { AppBar, Spacer } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../theme/style';
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconBot from 'react-native-vector-icons/MaterialCommunityIcons'
import ChatBotHook from '../Hook/ChatBot-hook';

import Spinner from 'react-native-spinkit';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ChatBot() {

    const [
        Message, DataMessages, isLoading,scrollViewRef,
        setMessage, handleSubmit
    ] = ChatBotHook()

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false)
    const [visible, setvisible] = useState(false)
    const [select, setselect] = useState(false)
    const [isSelect, setisSelect] = useState(false)

  


    const [KeyboardStatus, setKeyboardStatus] = useState(false)
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardStatus(true)
                if (scrollViewRef.current) {
                    scrollViewRef.current.scrollToEnd({ animated: true })
                }
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardStatus(false)
                if (scrollViewRef.current) {
                    scrollViewRef.current.scrollToEnd({ animated: true })
                }
            }
        )
    })



    return (

        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10 }]}>

            {/* <StatusBar backgroundColor={darkMode === true ? '#000' : '#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false} /> */}
            <View style={[style.main, { backgroundColor: theme.bg }]}>

                <AppBar
                    color={theme.bg}
                    title='Chat Bot'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                // leading={<TouchableOpacity
                // // onPress={() => navigation.goBack()}
                // >
                //     <IconBot name="robot-outline" size={35}
                //         color={Colors.black} />

                // </TouchableOpacity>
                // }
                // trailing={<TouchableOpacity onPress={() => setvisible(true)}>
                //     <Icons name='dots-vertical' size={30} color={theme.txt} />
                // </TouchableOpacity>}
                />

                {/* <Modal transparent={true} visible={visible}>

                    <View style={{ flex: 1 }}>
                        <View style={{
                            right: 45, height: 105, width: 150, backgroundColor: Colors.secondary, position: 'absolute', marginTop: 35, borderRadius: 10, borderTopEndRadius: 2,
                            shadowColor: 'black',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.2, borderColor: 'black',
                            elevation: 10,
                        }}>
                            <TouchableOpacity onPress={() => setvisible(false)}
                                style={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 10 }}>
                                <Icons name='close' size={20} color={Colors.active} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {setselect(!select),setvisible(false),navigation.navigate('Call')}}>
                                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                    <Icons name='phone-outline' size={20} color={select ? Colors.primary : Colors.active} />
                                    <Text style={[style.txt, { color: select ? Colors.primary : Colors.active, marginLeft: 5 }]}>Voice Call</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setisSelect(!isSelect),setvisible(false),navigation.navigate('Videocall')}} >
                                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                                    <Icons name='video-outline' size={20} color={isSelect ? Colors.primary : Colors.active} />
                                    <Text style={[style.txt, { color: isSelect ? Colors.primary : Colors.active, marginLeft: 5 }]}>Video Call</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </Modal> */}
                 <ScrollView
                    style={{  height: KeyboardStatus ? height / 3 : height / 1.5 , marginBottom: 12 }}
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}
                >

                    <View style={{ paddingTop: 30, marginLeft: 20, flexDirection: 'column', width: width / 2, alignItems: 'center', justifyContent: 'center' }}>


                        <View style={{ marginLeft: 15, }}>

                            <View style={{
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                backgroundColor: theme.bgChatBot,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20
                            }}>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                                <Text style={[style.subtxt, { color: Colors.disable }]}> consectetur adipiscing.</Text>
                            </View>

                        </View>

                    </View>

                    <View style={{ paddingTop: 20, marginLeft: 60, flexDirection: 'column', width: width / 2, alignItems: 'center', justifyContent: 'center' }}>



                        <View style={{ marginLeft: 15, }}>

                            <View style={{
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                backgroundColor: theme.bgChatBot,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20
                            }}>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                                <Text style={[style.subtxt, { color: Colors.disable }]}> consectetur adipiscing.</Text>
                            </View>

                        </View>

                    </View>

                    <View style={{ paddingTop: 20, marginLeft: 100, flexDirection: 'column', width: width / 2, alignItems: 'center', justifyContent: 'center' }}>

                        {/* <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} /> */}
                        <Image source={require('../../assets/image/dot2.png')}

                            style={{
                                height: 10, width: 10,
                                marginTop: 50,
                                marginLeft: 30,
                                position: 'absolute'
                            }} />
                        <View style={{ marginLeft: 15, }}>

                            <View style={{
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                backgroundColor: theme.bgChatBot,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20
                            }}>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                                <Text style={[style.subtxt, { color: Colors.disable }]}> consectetur adipiscing.</Text>
                            </View>

                        </View>

                    </View>



                    {/* (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))) */}

                    <View style={{ marginTop: 50, marginBottom: 10 }}>


                        {
                            DataMessages &&
                            DataMessages.map((item, index) => {
                                const time = item.time_envoie.substring(0, 5)
                                return (
                                    item.id_user ?
                                        <View key={index} style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'flex-end' }}>
                                            <View style={{ marginRight: 15 }}>
                                                <View style={{
                                                    backgroundColor: Colors.primary,
                                                    paddingHorizontal: 20,
                                                    paddingVertical: 15,
                                                    borderTopLeftRadius: 25,
                                                    borderTopRightRadius: 20,
                                                    borderBottomLeftRadius: 25
                                                }}>
                                                    <Text style={{ color: Colors.black, fontFamily: 'PlusJakartaSans-Regular' }}>{item.message}</Text>
                                                </View>
                                                <View style={{ alignItems: 'flex-end' }}>
                                                    <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}>{time}</Text>
                                                </View>
                                            </View>
                                            <Avatar.Image source={require('../../assets/image/chat2.png')} size={40} />
                                        </View>


                                        :


                                        <View key={index} style={{ width: width / 1.3, paddingTop: 20, marginBottom: 13, flexDirection: 'row' }}>

                                            <IconBot name="robot-outline" size={35} color={Colors.black} />


                                            <Image source={require('../../assets/image/dot2.png')}

                                                style={{
                                                    height: 10, width: 10,
                                                    marginTop: 50,
                                                    marginLeft: 30,
                                                    position: 'absolute'
                                                }} />


                                            <View style={{ marginLeft: 15, }}>
                                                <View style={{
                                                    paddingHorizontal: 20,
                                                    paddingVertical: 15,
                                                    backgroundColor: theme.icon,
                                                    borderTopLeftRadius: 20,
                                                    borderTopRightRadius: 20,
                                                    borderBottomRightRadius: 20
                                                }}>
                                                    <Text style={[style.subtxt, { color: Colors.disable }]}> {item.message} </Text>
                                                </View>
                                                <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}> {time} </Text>
                                            </View>

                                        </View>


                                );
                            })
                        }

                        {
                            isLoading &&
                            <View style={{ width: width / 1.3, paddingTop: 20, marginBottom: 13, flexDirection: 'row' }}>

                                <IconBot name="robot-outline" size={35} color={Colors.black} />


                                <Image source={require('../../assets/image/dot2.png')}

                                    style={{
                                        height: 10, width: 10,
                                        marginTop: 50,
                                        marginLeft: 30,
                                        position: 'absolute'
                                    }}
                                />


                                <View style={{ marginLeft: 15, }}>
                                    <Spinner isVisible={true} size={50} type={'ThreeBounce'} color={'#000'} />
                                </View>

                            </View>
                        }






                    </View>


                </ScrollView>

                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 0, marginTop:30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderRadius: 30, marginBottom: 40 }}>
                        <View style={[style.inputContainer, { backgroundColor: theme.input, borderRadius: 25 }]}>
                            <View style={{ backgroundColor: theme.bg, padding: 5, borderRadius: 50 }}>
                                <Image source={require('../../assets/image/paperclip.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 13, height: height / 30 }}></Image>
                            </View>
                            <View style={[style.verticaldivider, { backgroundColor: theme.icon, marginHorizontal: 10, height: '40%' }]}></View>



                            <TextInput placeholder='Ask me anything...'
                                onChangeText={(text) => setMessage(text)}
                                value={Message}
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={{ color: Colors.active, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }}
                                // onFocus={() => {
                                //     if (scrollViewRef.current) {
                                //         scrollViewRef.current.scrollToEnd({  animated: true });
                                //         console.log('===================')
                                //     }
                                // }}
                            />

                            <TouchableOpacity onPress={() => Message && handleSubmit()}  >

                                <Avatar.Icon icon='near-me' color={Colors.secondary} size={40} style={{ backgroundColor: Message ? Colors.nbMessage : Colors.primary }} />

                            </TouchableOpacity>






                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
