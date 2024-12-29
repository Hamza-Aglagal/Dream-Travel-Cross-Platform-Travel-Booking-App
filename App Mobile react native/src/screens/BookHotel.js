import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-elements/dist/helpers';
import { RadioButton } from 'react-native-paper';
import Icons from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function BookHotel() {

    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [checked, setChecked] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectDate, setSelectDate] = useState('Date');
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
        hideDatePicker();
    };

    const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false)
    const [selectDate1, setSelectDate1] = useState('Date');
    const showDatePicker1 = () => {
        setDatePickerVisibility1(true);
    };

    const hideDatePicker1 = () => {
        setDatePickerVisibility1(false);
    };

    const handleConfirm1 = (date) => {
        const dt = new Date(date);
        const x = dt.toISOString().split('T');
        const x1 = x[0].split('-');
        setSelectDate1(x1[2] + '/' + x1[1] + '/' + x1[0]);
        hideDatePicker1();
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,  }]}>
            <View style={[style.main, { backgroundColor: theme.bg ,marginTop:20}]}>
                <AppBar
                    color={theme.bg}
                    title="Book Hotel"
                    titleStyle={{ fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('HotelDetail')} >
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon, }}
                            color={theme.txt} size={45}
                        />
                    </TouchableOpacity>
                    }
                />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={[style.subtitle, { fontSize: 18, color: theme.txt, marginTop: 15 }]}>Customer Info</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={[style.txt, { color: Colors.disable }]}>Name</Text>
                        <Text style={[style.txt, { color: theme.txt }]}>Andy Lexian</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={[style.txt, { color: Colors.disable }]}>Email</Text>
                        <Text style={[style.txt, { color: theme.txt }]}>Andylexian29@gmail.com</Text>
                    </View>

                    <Text style={[style.subtitle, { fontSize: 18, color: theme.txt, marginTop: 20 }]}>Order Info</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Image source={require('../../assets/image/bed1.png')}
                            resizeMode='stretch'
                            style={{ height: height / 8, width: width / 4, borderRadius: 10 }}></Image>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>The Lalit New Delhi</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Icon name='location' size={18} color={theme.disable1}></Icon>
                                <Text style={[style.subtxt, { color: theme.disable1 }]}>Uttar Pradesh, India</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Icon name='star' size={16} color={'#FFCD1A'}></Icon>
                                <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 5 }]}>4.4</Text>
                                <Text style={[style.subtxt, { color: theme.disable }]}>(41 Reviews)</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                        <Text style={[style.txt, { color: theme.disable }]}>Type Room</Text>
                        <Text style={[style.txt, { color: theme.txt }]}>Presidential Suite</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Common Facilities</Text>
                        <Text style={[style.subtxt, { color: Colors.primary }]}>See All</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginBottom: 15 }}>
                        <View style={{ alignItems: 'center', marginTop: -20 }}>
                            <View style={[style.favorite1, { backgroundColor: theme.icon }]}>
                                <Icons name='wind' size={20} color={theme.txt}></Icons>
                            </View>
                            <Text style={[style.subtxt, { color: theme.disable }]}>Ac</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: -20 }}>
                            <View style={[style.favorite1, { backgroundColor: theme.icon }]}>
                                <Image source={theme.res}
                                    resizeMode='stretch'
                                    style={{ height: height / 35, width: width / 15 }}></Image>
                            </View>
                            <Text style={[style.subtxt, { color: theme.disable }]}>Restaurant</Text>
                        </View>

                        <View style={{ alignItems: 'center', }}>
                            <View style={[style.favorite1, { backgroundColor: theme.icon }]}>
                                <Icons name='water' size={20} color={theme.txt}></Icons>
                            </View>
                            <Text style={[style.subtxt, { color: theme.disable, textAlign: 'center' }]}>Swimming {"\n"} Pool</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={[style.favorite1, { backgroundColor: theme.icon }]}>
                                <Image source={theme.hour}
                                    resizeMode='stretch'
                                    style={{ height: height / 35, width: width / 15 }}></Image>
                            </View>
                            <Text style={[style.subtxt, { color: theme.disable, textAlign: 'center' }]}>24-Hours {"\n"} Front Desk</Text>
                        </View>
                    </View>

                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Stay time</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <Text style={[style.subtxt, { color: theme.disable, flex: 1 }]}>Check In</Text>
                        <View style={{ margin: 10 }}></View>
                        <Text style={[style.subtxt, { color: theme.disable, flex: 1 }]}>Check Out</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, backgroundColor: theme.input, borderRadius: 20, paddingRight: 10 }}>
                           <TextInput value={selectDate}
                                selectionColor={Colors.primary}
                                style={[style.txtinput, { fontFamily: 'PlusJakartaSans-Regular', flex: 1 }]}
                            />
                            <TouchableOpacity onPress={showDatePicker}>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible}
                                    mode="date"
                                    onConfirm={handleConfirm}
                                    onCancel={hideDatePicker}
                                />
                                <Icon name='calendar-outline' color={Colors.disable} size={20} />
                            </TouchableOpacity>                       
                             </View>

                        <View style={{ margin: 8 }}></View>
                        
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, backgroundColor: theme.input, borderRadius: 20, paddingRight: 10 }}>
                           <TextInput value={selectDate1}
                                selectionColor={Colors.primary}
                                style={[style.txtinput, { fontFamily: 'PlusJakartaSans-Regular', flex: 1 }]}
                            />
                            <TouchableOpacity onPress={showDatePicker1}>
                                <DateTimePickerModal
                                    isVisible={isDatePickerVisible1}
                                    mode="date"
                                    onConfirm={handleConfirm1}
                                    onCancel={hideDatePicker1}
                                />
                                <Icon name='calendar-outline' color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ paddingVertical: 30, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('CheckoutHotel')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Continue</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}