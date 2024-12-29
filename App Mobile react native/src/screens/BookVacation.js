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
import DateTimePickerModal from "react-native-modal-datetime-picker";



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function BookVacation() {

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


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg,  }]}>
            <View style={[style.main, { backgroundColor: theme.bg,marginTop:20 }]}>
                <AppBar
                    color={theme.bg}
                    title="Checkout Vacation"
                    titleStyle={{ fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('VacationDetail')} >
                        <Avatar.Icon icon="arrow-left"
                            style={{ backgroundColor: theme.icon, }}
                            color={theme.txt} size={45}
                        />
                    </TouchableOpacity>
                    }
                />

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={[style.subtitle, { fontSize: 18, color: theme.txt, marginTop: 10 }]}>Customer Info</Text>

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
                        <Image source={require('../../assets/image/Taj2.png')}
                            resizeMode='stretch'
                            style={{ height: height / 10, width: width / 4 }}></Image>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Taj Mahal</Text>
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

                    <Text style={{ color: Colors.disable,  marginTop: 20, fontFamily: 'PlusJakartaSans-Regular', marginBottom: 10 }}>Date Visit</Text>
                    <View style={[style.txtinput, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.input }]}>
                        <TextInput value={selectDate}
                            selectionColor={Colors.primary}
                            style={{ backgroundColor: theme.input, color: Colors.disable, fontFamily: 'PlusJakartaSans-Regular', flex: 1, color: theme.txt }}
                        ></TextInput>
                        <TouchableOpacity onPress={showDatePicker}>
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            <Icon name='calendar' color={Colors.disable} size={20} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ color: Colors.disable,  paddingTop: 30, fontFamily: 'PlusJakartaSans-Regular' }}>Number of people</Text>
                    <View style={{ paddingVertical: 10 }}>
                        <TextInput placeholder='5'
                            keyboardType='number-pad'
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.intxt}
                            style={[style.txtinput, { backgroundColor: theme.input, fontFamily: 'PlusJakartaSans-Regular', color: theme.txt }]}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={[style.txt, { color: Colors.disable }]}>Price</Text>
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$32<Text style={{ fontSize: 14, color: Colors.disable, fontFamily: 'PlusJakartaSans-Regular' }}>/Person</Text></Text>
                    </View>
                    <View style={[style.divider1, { color: Colors.bord, height: 1, marginBottom: 10, marginHorizontal: 10 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={[style.txt, { color: Colors.disable }]}>Total</Text>
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$160</Text>
                    </View>

                    <Text style={[style.subtitle, { fontSize: 18, color: theme.txt, marginTop: 20, marginBottom: 10 }]}>Promo Code</Text>
                    <View style={[style.txtinput, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.input, }]}>
                        <TextInput placeholder='Input Code'
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.intxt}
                            style={{ backgroundColor: theme.input, color: Colors.disable, fontFamily: 'PlusJakartaSans-Regular', flex: 1, color: theme.txt }}
                        ></TextInput>
                        <TouchableOpacity style={{ paddingHorizontal: 25, backgroundColor: Colors.primary, paddingBottom: 8, borderRadius: 20, paddingTop: 2 }}>
                            <Text style={[style.subtxt, { color: Colors.secondary }]}>Apply</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <Text style={[style.txt, { color: Colors.disable }]}>Promo</Text>
                        <Text style={[style.txt, { color: '#E53935', fontFamily: 'PlusJakartaSans-Bold' }]}>-$10</Text>
                    </View>
                    <View style={[style.divider1, { color: Colors.bord, height: 1, marginBottom: 10, marginHorizontal: 10 }]}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <Text style={[style.txt, { color: Colors.disable }]}>Total Pay</Text>
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$150</Text>
                    </View>

                    <Text style={[style.subtitle, { fontSize: 18, color: theme.txt, marginTop: 20 }]}>Payment Method</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', padding: 10, borderWidth: 1, marginTop: 10, borderRadius: 10, borderColor: Colors.border }}>
                        <Image source={require('../../assets/image/visa.png')}
                            resizeMode='stretch'
                            style={{ height: height / 36, width: width / 12 }}>
                        </Image>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', marginHorizontal: 10, flex: 1, }}>
                            <Text style={[style.title, { color: theme.txt, lineHeight: 20 }]}>.... .... .... </Text>
                            <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>87652</Text>
                        </View>
                        <RadioButton

                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            color={Colors.primary}
                            uncheckedColor={Colors.bord}

                        />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', padding: 10, borderWidth: 1, marginVertical: 20, borderRadius: 10, borderColor: Colors.border }}>
                        <Image source={require('../../assets/image/master.png')}
                            resizeMode='stretch'
                            style={{ height: height / 22, width: width / 10 }}>
                        </Image>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignItems: 'center', marginHorizontal: 10, flex: 1 }}>
                            <Text style={[style.title, { color: theme.txt, lineHeight: 20 }]}>.... .... .... </Text>
                            <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>87652</Text>
                        </View>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color={Colors.primary}
                            uncheckedColor={Colors.bord}

                        />
                    </View>
                    <View style={{ paddingVertical: 30, }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                            style={style.btn}>
                            <Text style={style.btntxt}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        </SafeAreaView>
    )
}