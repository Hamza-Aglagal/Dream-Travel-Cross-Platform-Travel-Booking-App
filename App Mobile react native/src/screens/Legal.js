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

export default function Legal() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Legal and Policies'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon, }}
                            color={theme.txt} size={45}
                        />
                    </TouchableOpacity>
                    } />
                <ScrollView >
                    <View style={{ marginVertical: 15 }}>
                        <Text style={[style.txt,{color:theme.txt,fontFamily: 'PlusJakartaSans-Bold'}]}>Terms</Text>
                        <View style={{ marginVertical: 15 }}>
                            <Text style={{ lineHeight: 20, fontFamily: 'PlusJakartaSans-Regular', color: Colors.disable, }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</Text>
                            <Text style={{ lineHeight: 20, fontFamily: 'PlusJakartaSans-Regular', color: Colors.disable }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</Text>
                        </View>
                        <Text style={[style.txt,{color:theme.txt,fontFamily: 'PlusJakartaSans-Bold'}]}>Changes to the Service and/or Terms:</Text>
                        <View style={{ marginVertical: 15 }}>
                            <Text style={{ lineHeight: 20, fontFamily: 'PlusJakartaSans-Regular', color: Colors.disable }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</Text>
                            <Text style={{ lineHeight: 20, fontFamily: 'PlusJakartaSans-Regular', color: Colors.disable }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</Text>
                            <Text style={{ lineHeight: 20, fontFamily: 'PlusJakartaSans-Regular', color: Colors.disable }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ornare quam vel facilisis feugiat amet sagittis arcu, tortor. Sapien, consequat ultrices morbi orci semper sit nulla. Leo auctor ut etiam est, amet aliquet ut vivamus. Odio vulputate est id tincidunt fames.</Text>

                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}