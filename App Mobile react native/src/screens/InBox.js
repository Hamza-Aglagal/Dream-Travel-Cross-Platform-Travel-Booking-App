import {
    View, Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput
} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AppBar, Spacer } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons'
import style from '../theme/style';
import { Colors } from '../theme/color'
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';
import themeContext from '../theme/themeContex';
import { SafeAreaView } from 'react-native-safe-area-context';
import InboxHook from '../Hook/Inbox-hook';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default function InBox() {

    const [ConversationsUser] = InboxHook()

    // console.log('ConversationsUser : ', ConversationsUser)

    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false)





    return (

        <SafeAreaView style={{ backgroundColor: theme.bg, flex: 1, paddingTop: 10 }}>

            <View style={[style.main, { backgroundColor: theme.bg }]}>

                <StatusBar backgroundColor={darkMode === true ? '#000' : '#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false} />

                <AppBar
                    color={theme.bg}
                    title="Message"
                    titleStyle={{ fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}

                />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={[style.area, { backgroundColor: theme.bg }]}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>

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



                        {
                            ConversationsUser ?
                                ConversationsUser.map((item, index) => {
                                    return (
                                        <View key={index} style={{ flexDirection: 'row', paddingTop: 20 }}>
                                            <Avatar.Image source={require('../../assets/image/m1.png')} />
                                            <Image source={require('../../assets/image/greenoutline.png')}
                                                style={{ height: 20, width: 20, position: 'absolute', marginTop: 65, marginLeft: 45 }}
                                            />
                                            <View style={{ paddingLeft: 15 }}>
                                                <TouchableOpacity onPress={() => navigation.navigate('Chat', { id_conv: item.id })}>
                                                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>
                                                        {item.destinatair && typeof item.destinatair === 'object' ? `${item.destinatair.prenom} ${item.destinatair.nom}` :
                                                            item.recepteur && typeof item.recepteur === 'object' ? `${item.recepteur.prenom} ${item.recepteur.nom}` : 'Unknown'}
                                                    </Text>
                                                    <Text style={[style.subtxt, { color: Colors.disable, paddingTop: 8 }]}>
                                                        {item.type ? item.type : 'No type specified'}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                                <Text style={[style.subtxt, { color: Colors.disable }]}>10:20</Text>
                                                <View style={{
                                                    backgroundColor: Colors.nbMessage,
                                                    height: 20, width: 20, borderRadius: 10,
                                                    alignSelf: 'flex-end',
                                                    marginTop: 8,
                                                }}>
                                                    <TouchableOpacity onPress={() => navigation.navigate('Chat')} >
                                                        <Text style={{ textAlign: 'center', color: Colors.secondary, fontSize: 12, paddingHorizontal: 3, paddingBottom: 2, marginTop: 2 }}>
                                                            {item.nbMessage ? item.nbMessage : '0'}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    );
                                })
                                : <Text>aucune conversation !</Text>
                        }


                    </View>

                    {/* <View style={{ marginRight: 20, paddingTop: 20 }}>
                        <Image source={theme.msg}
                            resizeMode='stretch'
                            style={{ height: height / 5, width: width - 20, marginLeft: -20 }}
                        />
                    </View> */}

                </ScrollView>

                <View style={{ backgroundColor: 'transparent', position: 'absolute', bottom: 90, right: 20, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                        <Avatar.Icon icon='plus' color={theme.bg} style={{ backgroundColor: theme.txt }} size={50} />
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}
