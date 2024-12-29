import { View, Text, Switch, SafeAreaView, TextInput, Modal, ImageBackground, StatusBar, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useContext } from 'react'
import style from '../theme/style'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/Ionicons'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
// import {Avatar} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome'
import { List } from 'react-native-paper';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { EventRegister } from 'react-native-event-listeners'
import { useNavigation } from '@react-navigation/native';




const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function Profile() {

    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState('false')

    const [visible, setVisible] = useState(false)
    const navigation = useNavigation();



    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]} >
            {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}/> */}
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <ScrollView showsVerticalScrollIndicator={false} style={{}}>
                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                        <Image source={require('../../assets/image/user.png')}
                            resizeMode='stretch'
                            style={{ width: width / 7, height: height / 15 }}
                        ></Image>
                        <View style={{ marginHorizontal: 10, flex: 1 }}>
                            <Text style={{ fontSize: 18,  color: theme.txt, marginBottom: 5, fontFamily: 'PlusJakartaSans-Bold' }}>Andy Lexsian</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='location' size={16} color={theme.disable}></Icon>
                                <Text style={[style.subtxt, { marginLeft: 2 }]}>Netherlands</Text>
                            </View>
                        </View>
                        <View style={{ marginRight: 20, alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('User')}>
                                <Icons name='edit' color={theme.txt} size={30}></Icons>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={{ color: theme.txt, marginVertical: 10, fontFamily: 'PlusJakartaSans-Regular' }}>Personal Info</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MyAddress')}>
                        <List.Item
                            title='My Address' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon {...props} name='location' color={theme.txt} size={26}></Icon>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('MyPayment')}>
                        <List.Item
                            title='Payment Method' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon1 {...props} name='wallet-outline' color={theme.txt} size={26}></Icon1>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>} />
                    </TouchableOpacity>

                    <Text style={{ color: theme.txt, marginVertical: 10, fontFamily: 'PlusJakartaSans-Regular' }}>Security</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                        <List.Item
                            title='Change Password' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon1 {...props} name='lock-outline' color={theme.txt} size={26}></Icon1>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                        <List.Item
                            title='Forgot Password' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon1 {...props} name='lock-open-outline' color={theme.txt} size={26}></Icon1>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Security')}>
                        <List.Item
                            title='Security' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon {...props} name='shield-checkmark-outline' color={theme.txt} size={26}></Icon>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>
                            }
                        /></TouchableOpacity>

                    <Text style={{ color: theme.txt, marginVertical: 10, fontFamily: 'PlusJakartaSans-Regular' }}>General</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Language1')}>
                        <List.Item
                            title='Language' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon {...props} name='globe-outline' color={theme.txt} size={26}></Icon>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>
                            }
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <List.Item
                            title='Notification' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon {...props} name='notifications-outline' color={theme.txt} size={26}></Icon>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>
                            }
                        /></TouchableOpacity>

                    <List.Item
                        title='Clear Cache' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                        left={props => <Icon {...props} name='trash-outline' color={theme.txt} size={26}></Icon>}
                        right={props => <Text {...props} style={{ color: Colors.disable, alignSelf: 'center', fontSize: 12, fontFamily: 'PlusJakartaSans-Regular' }} >88 MB</Text>}
                    />

                    <Text style={{ color: theme.txt, marginVertical: 10, fontFamily: 'PlusJakartaSans-Regular' }}>About</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Legal')}>
                        <List.Item
                            title='Legal and Policies' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon {...props} name='shield-outline' color={theme.txt} size={26}></Icon>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>
                            }
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HelpSupport')}>
                        <List.Item
                            title='Help & Support' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                            left={props => <Icon1 {...props} name='help-circle-outline' color={theme.txt} size={26}></Icon1>}
                            right={props =>
                                <Icon1 {...props} name='chevron-right' color={Colors.disable} size={26}></Icon1>
                            }
                        />
                    </TouchableOpacity>

                    <List.Item
                        title='Dark Mode' titleStyle={{ color: theme.txt, fontSize: 16, fontFamily: 'PlusJakartaSans-Regular' }}
                        left={props => <Icon {...props} name='trending-up' color={theme.txt} size={26}></Icon>}
                        right={props => <Switch {...props}
                            value={darkMode}
                            onValueChange={
                                (value) => {
                                    setDarkMode(value);
                                    EventRegister.emit('ChangeTheme', value)
                                }
                            }
                        />}
                    />
                    <View style={{ marginBottom: 70, marginTop: 10 }}>
                        <TouchableOpacity onPress={() => setVisible(true)}
                            style={[style.btn1, { borderColor: Colors.primary, borderWidth: 1, backgroundColor: theme.bg }]}>
                            <Text style={[style.btntxt1, { color: Colors.primary }]}>Log Out</Text>
                            <Modal
                                transparent={true}
                                visible={visible}
                            >
                                <View style={{
                                    flex: 1,
                                    width: width,
                                    backgroundColor: '#000000aa'
                                }}>
                                    <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 30, marginVertical: 200 }]}>
                                        <View style={{ paddingHorizontal: 20 }}>
                                            <View style={{ paddingTop: 10, alignItems: 'flex-end' }}>
                                                <TouchableOpacity onPress={() => setVisible(false)}>
                                                <Avatar.Icon icon='close' color={theme.txt} size={40}
                                                    style={{
                                                        // borderWidth: 1,
                                                        // borderColor: '#FF4747',
                                                        backgroundColor: theme.icon
                                                    }}
                                                />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ paddingTop: 5 }}>
                                                <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center' }]}>Are You Sure want to logout ?</Text>
                                            </View>

                                            <View style={{ paddingTop: 20, alignItems: 'center', }}>
                                                <TouchableOpacity style={{
                                                    // paddingHorizontal: 40,
                                                    paddingVertical: 12,
                                                    backgroundColor: Colors.primary,
                                                    borderRadius: 20,
                                                    marginLeft: 10,
                                                    width:width/2
                                                }}
                                                    onPress={() => setVisible(false)}
                                                >
                                                    <Text style={{ fontSize: 14, color: theme.bg, fontFamily: 'PlusJakartaSans-Regular' ,textAlign:'center'}}>Cancel</Text>
                                                </TouchableOpacity>
                                                </View>
                                                <View style={{ marginTop: 20 ,alignItems:'center'}}>
                                                <TouchableOpacity onPress={() => { navigation.navigate('Login'); setVisible(false); }}
                                                    // style={{
                                                    //     // paddingHorizontal: 40,
                                                    //     paddingVertical: 12,
                                                    //     borderColor: '#FF4747',
                                                    //     borderWidth: 1,
                                                    //     borderRadius: 20,
                                                    //     backgroundColor: theme.bg,
                                                    //     width:width/3
                                                    // }}
                                                    >
                                                    <Text style={{ fontSize: 14, color: '#FF4747', fontFamily: 'PlusJakartaSans-Regular' ,textAlign:'center'}}>Log Out</Text>
                                                </TouchableOpacity>
                                                </View>
                                                
                                                
                                           
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}