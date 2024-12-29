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

export default function MyAddress() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='MyAddress'
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
                        <Icon name='plus-box-outline' color={theme.disable} size={30} />
                    </TouchableOpacity>}
                />
                <View style={{ paddingTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            <View style={{ width: width / 1.5, }}>
                                <Text style={[style.subtitle, { color: theme.txt }]}>Andy Andrew</Text>
                                <Text style={[style.subtxt, { color: theme.disable }]}>+1 3712 3789</Text>
                                <Text style={[style.txt, { color: theme.disable, marginTop: 5 }]}>711 Leavenworth Apt. # 47 San Francisco, CA 94109</Text>
                            </View>
                            <View style={{ marginTop: 10, width: width / 2.5 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}
                                style={{ borderColor: Colors.primary, borderWidth: 1, paddingVertical: 5, borderRadius: 12 }}>
                                    <Text style={[style.txt, { color: Colors.primary, textAlign: 'center' }]}>Change Address</Text>
                                </TouchableOpacity>
                            </View>
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
                <View style={{ paddingTop: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            <View style={{ width: width / 1.5, }}>
                                <Text style={[style.subtitle, { color: theme.txt }]}>Elevenia Kalia</Text>
                                <Text style={[style.subtxt, { color: theme.disable }]}>+1 3712 3789</Text>
                                <Text style={[style.txt, { color: theme.disable, marginTop: 5 }]}>711 Leavenworth Apt. # 47 San Francisco, CA 94109</Text>
                            </View>
                            <View style={{ marginTop: 10, width: width / 2.5 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('NewAddress')}
                                style={{ borderColor: Colors.primary, borderWidth: 1, paddingVertical: 5, borderRadius: 12 }}>
                                    <Text style={[style.txt, { color: Colors.primary, textAlign: 'center' }]}>Change Address</Text>
                                </TouchableOpacity>
                            </View>
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
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                    style={[style.btn]}>
                        <Text style={[style.txt]}>Select Address</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}