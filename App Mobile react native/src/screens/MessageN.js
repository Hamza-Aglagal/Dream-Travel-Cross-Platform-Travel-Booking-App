import {
    View, Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    SafeAreaView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar, Spacer } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import style from '../theme/style';
import { Colors } from '../theme/color'
import theme from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper'
import themeContext from '../theme/themeContex';

const width =Dimensions.get('screen').width
const height =Dimensions.get('screen').height


export default function MessageN() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg ,}]}>
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:30}]}>
            <AppBar
                color={theme.bg}
                title="Notification"
                titleStyle={{fontFamily:'PlusJakartaSans-Bold'}}
                centerTitle={true}
                elevation={0}
                leading={<TouchableOpacity
                onPress={() => navigation.navigate('MyTabs')}
                >
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor:theme.icon, }}
                        color={theme.txt} size={45}

                    />
                </TouchableOpacity>
                }
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingTop: 20 }}>
                    <Text style={[style.txt, { color: theme.txt ,fontFamily:'PlusJakartaSans-Bold' }]}>Today</Text>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row',  }}>
                    <Avatar.Image source={require('../../assets/image/chat1.png')} size={45} />
                    <View style={{paddingHorizontal:20}}>
                        <Text style={[style.txt,{color:theme.txt,width:290}]}>There's an incoming message from Richard Mandowen</Text>
                        {/* <Text style={[style.txt,{color:theme.txt}]}></Text> */}
                        <Text style={{fontSize:14,color:Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>2 hours Ago</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row',  }}>
                <Avatar.Image source={require('../../assets/image/chat1.png')} size={45} />
                    <View style={{marginLeft:15}}>
                        <Text style={[style.txt,{color:theme.txt,width:290}]}>Outgoing call from Richar Kandowen</Text>
                        {/* <Text style={[style.txt,{color:theme.txt,}]}></Text> */}
                        <Text style={{fontSize:14,color:Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>3 hours Ago</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row',  }}>
                    <Avatar.Icon icon='calendar-month' color={Colors.primary} size={45}
                        style={{ backgroundColor: theme.icon }}
                    />
                    <View style={{marginLeft:15}}>
                        <Text style={[style.txt,{color:theme.txt,width:290}]}>Don't forget to schedule your vacation to the Taj Mahal,<Text style={{fontFamily:'PlusJakartaSans-Bold'}}> August 25, 2022</Text></Text>
                        {/* <Text style={[style.txt,{color:theme.txt}]}></Text> */}
                        <Text style={{fontSize:14,color:Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>5 hours Ago</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={[style.txt, { color: theme.txt,fontFamily:'PlusJakartaSans-Bold' }]}>Yesterday</Text>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row',  }}>
                    <Avatar.Icon icon='wallet-outline' color={Colors.primary} size={45}
                        style={{ backgroundColor:theme.icon}}
                    />
                    <View style={{marginLeft:15}}>
                        <Text style={[style.txt,{color:theme.txt,width:290}]}>Your payment for the holiday ticket to the taj mahal was successful</Text>
                        {/* <Text style={[style.txt,{color:theme.txt,}]}></Text> */}
                        <Text style={{fontSize:14,color:Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>1 day Ago</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 20, flexDirection: 'row',  }}>
                    <Avatar.Icon icon='wallet-outline' color={Colors.primary} size={45}
                        style={{ backgroundColor:theme.icon}}
                    />
                    <View style={{marginLeft:15}}>
                        <Text style={[style.txt,{color:theme.txt,width:290}]}>Your payment for booking The Lalit New Delhi hotel was successful</Text>
                        {/* <Text style={[style.txt,{color:theme.txt,}]}></Text> */}
                        <Text style={{fontSize:14,color:Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>1 day Ago</Text>
                    </View>
                </View>
                
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}