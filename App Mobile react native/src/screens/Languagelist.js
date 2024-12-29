import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AppBar } from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Languagelist() {

    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false)


    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    useEffect(() => {
        if (selectedLanguage) {
            AsyncStorage.setItem('Language', selectedLanguage)
        }
    }, [selectedLanguage])



    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
            <StatusBar backgroundColor={darkMode === true ? '#000' : '#fff'} barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false} />



            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 30 }]}>
                <AppBar
                    color={theme.bg}
                    title='Language'
                    titleStyle={{ color: theme.txt, }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Language')}>
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon, }}
                            color={theme.txt} size={45} />
                    </TouchableOpacity>
                    } />

                <ScrollView showsVerticalScrollIndicator={false}>


                    {
                        ['Arabic', 'English (UK)', 'English', 'Chinese', 'Croatian', 'Finnish', 'French'].map((language, index) => (
                            <TouchableOpacity onPress={() => handleLanguageSelect(language)} key={index} style={[style.radio, { paddingVertical: 7, flexDirection: 'row', alignItems: 'center', marginTop: index === 0 ? 20 : 10, backgroundColor: theme.input }]}>
                                <RadioButton
                                    value={language}
                                    status={selectedLanguage === language ? 'checked' : 'unchecked'}
                                    color={Colors.primary}
                                    uncheckedColor={Colors.bord}
                                />
                                <Text style={[style.txt, { color: theme.txt }]}>
                                    {language}
                                </Text>
                            </TouchableOpacity>

                        ))
                    }

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}