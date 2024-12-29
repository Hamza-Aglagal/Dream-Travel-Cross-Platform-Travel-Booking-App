import {
    View, Text,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView
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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewCard() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        title='Add New Card'
                        titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyPayment')}>
                            <Avatar.Icon icon="arrow-left"
                                style={{ backgroundColor: theme.icon, }}
                                color={theme.txt} size={40}
                            />
                        </TouchableOpacity>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ paddingTop: 20 }}>
                            <Text style={[style.txt, { color: theme.txt }]}>Card Number</Text>
                            <TextInput style={[style.inputContainer, { backgroundColor: theme.input, borderColor: theme.input, borderRadius: 25, color: theme.txt }]}
                                placeholder='Enter Card Number'
                                placeholderTextColor={theme.disable}
                                selectionColor={Colors.primary}
                            />
                        </View>

                        <View style={{ paddingTop: 20 }}>
                            <Text style={[style.txt, { color: theme.txt }]}>Card Holder Name</Text>
                            <TextInput style={[style.inputContainer, { backgroundColor: theme.input, borderColor: theme.input, borderRadius: 25, color: theme.txt }]}
                                placeholder='Enter Holder Name'
                                placeholderTextColor={theme.disable}
                                selectionColor={Colors.primary}
                            />
                        </View>

                        <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1 }}>
                            <Text style={[style.txt, { color: theme.txt }]}>Expired</Text>
                            <TextInput style={[style.inputContainer, { backgroundColor: theme.input, borderColor: theme.input, borderRadius: 25, color: theme.txt }]}
                                placeholder='MM/YY'
                                placeholderTextColor={theme.disable}
                                selectionColor={Colors.primary}
                            />  
                            </View>
                            <View style={{marginHorizontal:10}}></View>
                            <View style={{ flex: 1 }}>
                            <Text style={[style.txt, { color: theme.txt }]}>CVV Code</Text>
                            <TextInput style={[style.inputContainer, { backgroundColor: theme.input, borderColor: theme.input, borderRadius: 25, color: theme.txt }]}
                                placeholder='CVV'
                                placeholderTextColor={theme.disable}
                                selectionColor={Colors.primary}
                            />
                            </View>
                        </View>

                        <View style={{paddingTop:100,marginBottom:20}}>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                            style={[style.btn]}>
                                <Text style={[style.txt]}>Add Card</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}