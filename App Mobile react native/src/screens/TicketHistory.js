import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    ImageBackground,
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../theme/color'
import RBSheet from 'react-native-raw-bottom-sheet';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function TicketHistory() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='MyBooked'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                />
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TicketBook')}>
                            <Text style={[style.txt, { color: theme.txt, textAlign: 'center', fontFamily: 'PlusJakartaSans-Bold' }]}>Booked</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 5 }}></View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={[style.btn, { paddingVertical: 10 }]}>
                            <Text style={[style.txt]}>History</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 15 }}>
                    <View style={{ backgroundColor: theme.input, borderRadius: 15 }}>
                        <View style={{ padding: 10 }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={[style.subtxt, { color: theme.disable }]}>22 march 2022, Thu</Text>
                                <View style={{ paddingVertical: 5, backgroundColor: '#E6F9F0', borderRadius: 15, paddingHorizontal: 10 }}>
                                    <Text style={[style.subtxt, { color: '#00C566' }]}>Finished</Text>
                                </View>
                            </View>

                            <View style={{ paddingTop: 20, flexDirection: 'row', width: width / 4 }}>
                                <Image source={require('../../assets/image/bed1-2.png')} resizeMode='stretch'
                                    style={{ height: height / 8, width: width / 4 }}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>The Lalit New Delhi</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icons name='location' color={theme.disable1} size={15} />
                                        <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>Uttar Pradesh, India</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                        <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                        <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                        <Text style={[style.subtxt, { color: theme.disable, }]}>(41 Reviews)</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View>
                                    <Text style={[style.txt, { color: theme.disable }]}>TotalPrice</Text>
                                    <Text style={[style.subtitle, { color: theme.txt }]}>$320</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.RBSheet2.open()}>
                                    <RBSheet ref={ref => {
                                        this.RBSheet2 = ref;
                                    }}
                                        height={400}
                                        openDuration={100}
                                        customStyles={{
                                            container: {
                                                borderTopRightRadius: 20,
                                                borderTopLeftRadius: 20,
                                                backgroundColor: theme.bg
                                            }
                                        }}>
                                        <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                                            <AppBar
                                                color={theme.bg}
                                                title='Give a Review'
                                                titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                                                centerTitle={true}
                                                elevation={0}
                                                leading={<TouchableOpacity onPress={() => this.RBSheet2.close()}>
                                                    <Avatar.Icon icon="close"
                                                        style={{ backgroundColor: theme.icon, }}
                                                        color={theme.txt} size={40}
                                                    />
                                                </TouchableOpacity>
                                                }
                                            />
                                        <View style={{paddingTop:15,flexDirection:'row',justifyContent:'space-evenly'}}>
                                            <Icon name='star' size={40} color='#F0BB52'/>
                                            <Icon name='star' size={40} color='#F0BB52'/>
                                            <Icon name='star' size={40} color='#F0BB52'/>
                                            <Icon name='star' size={40} color='#F0BB52'/>
                                            <Icon name='star' size={40} color='#E3E9ED'/>
                                        </View>
                                        <View style={{paddingTop:15}}>
                                            <Text style={[style.txt,{color:theme.disable,marginBottom:10}]}>Detail Review</Text>
                                            <View style={{borderColor:Colors.primary,borderWidth:1,height:100,borderRadius:20,}}>
                                                <Text style={[style.subtxt,{color:theme.disable,marginHorizontal:8,marginTop:5}]}>the place is very beautiful, it doesn't disappoint</Text>
                                            </View>
                                        </View>
                                        <View style={{paddingVertical:20}}>
                                            <TouchableOpacity onPress={() => this.RBSheet2.close()}
                                            style={[style.btn]}>
                                                <Text style={[style.txt]}>Submit</Text>
                                            </TouchableOpacity>
                                        </View>
                                        </View>
                                    </RBSheet>
                                    <View style={{ paddingHorizontal: 30, borderColor: Colors.primary, borderWidth: 1, borderRadius: 25, justifyContent: 'center', backgroundColor: Colors.primary, paddingVertical: 8 }}>
                                        <Text style={[style.txt, { color: Colors.secondary }]}>Rating</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={{ paddingTop: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('TicketDetail')}
                                    style={{ borderColor: Colors.primary, borderWidth: 1, paddingVertical: 10, borderRadius: 20 }}>
                                    <Text style={[style.txt, { color: Colors.primary, textAlign: 'center', fontFamily: 'PlusJakartaSans-Bold' }]}>Detail</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <View style={{ paddingVertical: 20 }}>
                        <View style={{ backgroundColor: theme.input, borderRadius: 15 }}>
                            <View style={{ padding: 10 }}>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[style.subtxt, { color: theme.disable }]}>22 march 2022, Thu</Text>
                                    <View style={{ paddingVertical: 5, backgroundColor: '#E6F9F0', borderRadius: 15, paddingHorizontal: 10 }}>
                                        <Text style={[style.subtxt, { color: '#00C566' }]}>Finished</Text>
                                    </View>
                                </View>

                                <View style={{ paddingTop: 20, flexDirection: 'row', width: width / 4 }}>
                                    <Image source={require('../../assets/image/Taj2.png')} resizeMode='stretch'
                                        style={{ height: height / 8, width: width / 4 }}
                                    />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>Taj Mahal</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                            <Icons name='location' color={theme.disable1} size={15} />
                                            <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>Uttar Pradesh, India</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                            <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                            <Text style={[style.subtxt, { color: theme.disable, }]}>(41 Reviews)</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View>
                                        <Text style={[style.txt, { color: theme.disable }]}>TotalPrice</Text>
                                        <Text style={[style.subtitle, { color: theme.txt }]}>$320</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.RBSheet2.open()}>
                                        <View style={{ paddingHorizontal: 30, borderColor: Colors.primary, borderWidth: 1, borderRadius: 25, justifyContent: 'center', backgroundColor: Colors.primary, paddingVertical: 8 }}>
                                            <Text style={[style.txt, { color: Colors.secondary }]}>Rating</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ paddingTop: 10 }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('TicketDetail')}
                                        style={{ borderColor: Colors.primary, borderWidth: 1, paddingVertical: 10, borderRadius: 20 }}>
                                        <Text style={[style.txt, { color: Colors.primary, textAlign: 'center', fontFamily: 'PlusJakartaSans-Bold' }]}>Detail</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}