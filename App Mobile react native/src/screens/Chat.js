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
import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppBar, Spacer } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../theme/style';
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import ChatHook from '../Hook/Chat-hook';
import io from 'socket.io-client';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default function Chat() {




    const [id_conv, Id_User, AllMessagesConv,Name_Friend] = ChatHook();

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false);
    const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState(false);
    const [isSelect, setIsSelect] = useState(false);

    const [Messages, setMessages] = useState([]);
    // console.log('Messages : ', Messages);

    const [socket, setSocket] = useState(null);
    const [Message, setMessage] = useState('');

    useEffect(() => {
        // console.log('id conv :', id_conv)
        const socket = io('http://10.0.2.2:8080');

        socket.on('connect', () => {
            console.log('Connected to Socket server');
            socket.emit('create_room', id_conv);
        })

        socket.on('room_created', (data) => {
            // console.log('Room created:', data.id_conversation);
        })

        socket.on('new_message', (data) => {
            setMessages(prevMessages => [...prevMessages, data]);
        })

        socket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
        })

        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
        if (socket && Message.trim()) {
            socket.emit('send_message', { message: Message, id_user: Id_User, id_conversation: id_conv });
            setMessage('');
        }
    };


    const scrollViewRef = useRef(null);
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true })
        }
    }, [AllMessagesConv, Messages]);


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
            <View style={[style.main, { backgroundColor: theme.bg }]}>
                <AppBar
                    color={theme.bg}
                    title={Name_Friend ? Name_Friend : 'user'}
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Avatar.Icon
                                icon="arrow-left"
                                style={{ backgroundColor: theme.icon }}
                                color={theme.txt}
                                size={45}
                            />
                        </TouchableOpacity>
                    }
                    trailing={
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <Icons name='dots-vertical' size={30} color={theme.txt} />
                        </TouchableOpacity>
                    }
                />
                <Modal transparent={true} visible={visible}>
                    <View style={{ flex: 1 }}>
                        <View style={{
                            right: 45, height: 105, width: 150, backgroundColor: Colors.secondary, position: 'absolute', marginTop: 35, borderRadius: 10, borderTopEndRadius: 2,
                            shadowColor: 'black',
                            shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.2, borderColor: 'black',
                            elevation: 10,
                        }}>
                            <TouchableOpacity onPress={() => setVisible(false)}
                                style={{ flex: 1, justifyContent: 'flex-end', marginHorizontal: 10 }}>
                                <Icons name='close' size={20} color={Colors.active} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setSelect(!select); setVisible(false); navigation.navigate('Call'); }}>
                                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                    <Icons name='phone-outline' size={20} color={select ? Colors.primary : Colors.active} />
                                    <Text style={[style.txt, { color: select ? Colors.primary : Colors.active, marginLeft: 5 }]}>Voice Call</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { setIsSelect(!isSelect); setVisible(false); navigation.navigate('Videocall'); }} >
                                <View style={{ marginHorizontal: 10, flexDirection: 'row', marginVertical: 10, alignItems: 'center' }}>
                                    <Icons name='video-outline' size={20} color={isSelect ? Colors.primary : Colors.active} />
                                    <Text style={[style.txt, { color: isSelect ? Colors.primary : Colors.active, marginLeft: 5 }]}>Video Call</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <ScrollView
                    style={{  height: KeyboardStatus ? height / 3 : height / 1.5 , marginBottom: 12 }}
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}
                >


                    {
                        AllMessagesConv && AllMessagesConv.map((item, index) => {
                            const time = item.time_envoie.substring(0, 5)
                            return (item.id_user == Id_User ?

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
                                            <Text style={{ color: Colors.black, fontFamily: 'PlusJakartaSans-Regular' }}> {item.message} </Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}> {time} </Text>
                                        </View>
                                    </View>
                                    <Avatar.Image source={require('../../assets/image/chat2.png')} size={40} />
                                </View> :

                                <View key={index} style={{ paddingTop: 20, flexDirection: 'row' }}>
                                    <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} />
                                    <Image
                                        source={require('../../assets/image/dot2.png')}
                                        style={{
                                            height: 10, width: 10,
                                            marginTop: 50,
                                            marginLeft: 30,
                                            position: 'absolute'
                                        }}
                                    />
                                    <View style={{ marginLeft: 15 }}>
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


                            )
                        })
                    }


                    {
                        Messages && Messages.map((item, index) => {
                            const time = item.date.substring(11, 16)
                            return (item.id_user == Id_User ?

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
                                            <Text style={{ color: Colors.secondary, fontFamily: 'PlusJakartaSans-Regular' }}> {item.message} </Text>
                                        </View>
                                        <View style={{ alignItems: 'flex-end' }}>
                                            <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}> {time} </Text>
                                        </View>
                                    </View>
                                    <Avatar.Image source={require('../../assets/image/chat2.png')} size={40} />
                                </View> :

                                <View key={index} style={{ paddingTop: 20, flexDirection: 'row' }}>
                                    <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} />
                                    <Image
                                        source={require('../../assets/image/dot2.png')}
                                        style={{
                                            height: 10, width: 10,
                                            marginTop: 50,
                                            marginLeft: 30,
                                            position: 'absolute'
                                        }}
                                    />
                                    <View style={{ marginLeft: 15 }}>
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


                            )
                        })
                    }


                    {/* <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                        <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} />
                        <Image
                            source={require('../../assets/image/dot2.png')}
                            style={{
                                height: 10, width: 10,
                                marginTop: 50,
                                marginLeft: 30,
                                position: 'absolute'
                            }}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <View style={{
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                backgroundColor: theme.icon,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20
                            }}>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>consectetur adipiscing.</Text>
                            </View>
                            <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}>15:42 PM</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'flex-end' }}>
                        <View style={{ marginRight: 15 }}>
                            <View style={{
                                backgroundColor: Colors.primary,
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                borderTopLeftRadius: 25,
                                borderTopRightRadius: 20,
                                borderBottomLeftRadius: 25
                            }}>
                                <Text style={{ color: Colors.secondary, fontFamily: 'PlusJakartaSans-Regular' }}>Lorem ipsum dolor sit et</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}>15:42 PM</Text>
                            </View>
                        </View>
                        <Avatar.Image source={require('../../assets/image/chat2.png')} size={40} />
                    </View>

                    <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                        <Avatar.Image source={require('../../assets/image/chat1.png')} size={40} />
                        <Image
                            source={require('../../assets/image/dot2.png')}
                            style={{
                                height: 10, width: 10,
                                marginTop: 50,
                                marginLeft: 30,
                                position: 'absolute'
                            }}
                        />
                        <View style={{ marginLeft: 15 }}>
                            <View style={{
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                backgroundColor: theme.icon,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                borderBottomRightRadius: 20
                            }}>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>Lorem ipsum dolor sit et,</Text>
                                <Text style={[style.subtxt, { color: Colors.disable }]}>consectetur adipiscing.</Text>
                            </View>
                            <Text style={{ color: '#9CA4AB', marginTop: 5, fontFamily: 'PlusJakartaSans-Regular' }}>15:42 PM</Text>
                        </View>
                    </View> */}





                </ScrollView>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderRadius: 30, marginBottom: 20 }}>
                        <View style={[style.inputContainer, { backgroundColor: theme.input, borderRadius: 25 }]}>
                            <View style={{ backgroundColor: theme.bg, padding: 5, borderRadius: 50 }}>
                                <Image
                                    source={require('../../assets/image/paperclip.png')}
                                    resizeMode='stretch'
                                    style={{ width: width / 13, height: height / 30 }}
                                />
                            </View>
                            <View style={[style.verticaldivider, { backgroundColor: theme.icon, marginHorizontal: 10, height: '40%' }]}></View>
                            <TextInput
                                value={Message}
                                onChangeText={setMessage}
                                placeholder="Type your message"
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.disable}
                                style={{ color: Colors.active, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }}
                            />
                            <TouchableOpacity onPress={()=> Message &&  sendMessage()}>
                                <Avatar.Icon icon='near-me' color={Colors.secondary} size={40} style={{ backgroundColor: Message ? Colors.nbMessage : Colors.primary }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
