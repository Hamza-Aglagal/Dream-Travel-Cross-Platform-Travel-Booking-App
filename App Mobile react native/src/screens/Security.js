import {
    View, Text,
    SafeAreaView, TextInput, Switch, StatusBar, TouchableOpacity,
} from 'react-native'
import React, { useState, useContext } from 'react'
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppBar } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

export default function Security() {
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [ison, setIsOn] = useState(false);
    const toggle = () => setIsOn(previousState => !previousState);

    const [ison1, setIsOn1] = useState(true);
    const toggle1 = () => setIsOn1(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    title='Security'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Regular' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor:theme.icon}}
                            color={theme.txt} size={45}
                        />
                    </TouchableOpacity>
                    } />
                <View style={{marginTop:30,borderColor:Colors.bord,borderWidth:1,paddingHorizontal:20,paddingVertical:10,borderRadius:15}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Face ID</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
            </View>
            <View style={[style.divider1,{backgroundColor:Colors.bord}]}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Remember Password</Text>
                 <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle}
                  value={ison}
                />
            </View>
            <View style={[style.divider1,{backgroundColor:Colors.bord}]}></View>
            
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt1,{color:theme.txt,}]}>Touch ID</Text>
                <Switch
                  trackColor={{false: Colors.disable, true: Colors.primary}}
                  thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggle1}
                  value={ison1}
                />
            </View>
            
            
        </View>
            </View>
        </SafeAreaView>
    )
}