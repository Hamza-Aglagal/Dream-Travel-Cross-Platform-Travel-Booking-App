import { View, Text, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import React, { useState, useContext } from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';



export default function Language() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false)


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 20 }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}

                <View style={{ flex: 2.7, marginTop: 30, }}>
                    <Text style={[style.subtitle, { color: theme.txt, marginBottom: 10, textAlign: 'center' }]}>Select your Language</Text>
                    {/* <Text style={[style.subtxt, { textAlign: 'center' }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text> */}


                    <Text style={[style.txt1, { color: Colors.disable1, marginTop: 30, marginBottom: 45 }]}>Language</Text>

                    <View style={[styles.container]}>
                        <TouchableOpacity style={{width : '100%',borderBlockColor:'grey', borderRadius: 5 , height: 50 ,display:'flex', flexDirection:'row', justifyContent:'space-between',alignItems:'center'}} onPress={() => navigation.navigate('Languagelist')}>
                            <Text style={styles.placeholder}>Select Language</Text>
                            <Icon name='chevron-down' color={theme.txt} size={20} />
                        </TouchableOpacity>
                    </View>


                    <View style={{ paddingVertical: 40, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        flex: 1,
        color: theme.txt,
        fontFamily: 'PlusJakartaSans-Regular',
    },
});