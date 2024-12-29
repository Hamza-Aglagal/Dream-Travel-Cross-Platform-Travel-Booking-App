import {
    View, Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    SafeAreaView
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
import { RadioButton } from 'react-native-paper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function MyPayment() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='MyPayment'
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
                    trailing={<TouchableOpacity>
                        <Avatar.Icon icon='plus' color={theme.txt} size={30}
                            style={{ backgroundColor: theme.bg, borderColor: Colors.border, borderWidth: 1 }}
                        />
                    </TouchableOpacity>}
                />
                <View style={{ paddingTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/image/visa2.png')}
                            resizeMode='stretch'
                            style={{ height: height / 15, width: width / 7 }}
                        />
                        <View style={{ marginLeft: 5, width: width / 1.8 ,}}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>BCA (Bank Central Asia)</Text>
                            <Text style={[style.txt,{color:theme.disable}]}>•••• •••• •••• 87652</Text>
                            <Text style={[style.txt,{color:theme.disable}]}>Brooklyn Simmons</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={Colors.primary}
                                uncheckedColor={Colors.bord}

                            />
                        </View>
                        
                    </View>
                    
                </View>
                <View style={{height:1,backgroundColor:Colors.border,marginTop:20,marginLeft:55}}></View>

                <View style={{ paddingTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/image/master2.png')}
                            resizeMode='stretch'
                            style={{ height: height / 15, width: width / 7 }}
                        />
                        <View style={{ marginLeft: 5, width: width / 1.8 ,}}>
                            <Text style={[style.subtitle, { color: theme.txt }]}>BCA (Bank Central Asia)</Text>
                            <Text style={[style.txt,{color:theme.disable}]}>•••• •••• •••• 87652</Text>
                            <Text style={[style.txt,{color:theme.disable}]}>Brooklyn Simmons</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color={Colors.primary}
                                uncheckedColor={Colors.bord}

                            />
                        </View>
                        
                    </View>
                    
                </View>
                <View style={{height:1,backgroundColor:Colors.border,marginTop:20,marginLeft:55}}></View>

                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('NewCard')}
                    style={[style.btn]}>
                        <Text style={[style.txt]}>Select Payment</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}