import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { ActivityIndicator, Avatar, MD2Colors } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import LoginHook from '../Hook/Login-hook';




const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Login() {

  const [
    email, password, ErrPassword, ErrEmail,isLoading,
    setPassword, setEmail,
    handleSignIn,
  ] = LoginHook()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [isSelected, setIsSelected] = useState(false)




  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 10, }]}>
      <KeyboardAvoidingView style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
        <View style={{ flex: 1, marginHorizontal: 20, marginTop: 20 }}>
          <AppBar
            color={theme.bg}
            title='Sign In'
            titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
            centerTitle={true}
            elevation={0}
            leading={<TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
              <Avatar.Icon icon="arrow-left"
                style={{ backgroundColor: theme.icon, }}
                color={theme.txt} size={40}
              />
            </TouchableOpacity>
            } />

          <ScrollView showsVerticalScrollIndicator={false}>

            <Text style={{ color: Colors.disable, paddingTop: 30, fontFamily: 'PlusJakartaSans-Regular' }}>Email Address</Text>

            <View style={{ paddingVertical: 10 }}>
              <TextInput placeholder='Enter Your Email Address'
                value={email}
                onChangeText={setEmail}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.intxt}
                style={[style.txtinput, { backgroundColor: theme.input, fontFamily: 'PlusJakartaSans-Regular' }]}
              />
              <Text style={{ color: Colors.red, paddingTop: 0, fontSize: 13, marginLeft: 25, fontFamily: 'PlusJakartaSans-Regular' }}> {ErrEmail} </Text>
            </View>

            <Text style={{ color: Colors.disable, paddingVertical: 10, fontFamily: 'PlusJakartaSans-Regular' }}>PassWord</Text>

            <View style={[style.txtinput, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.input }]}>

              <TextInput placeholder='Enter Your Password'
                value={password}
                onChangeText={setPassword}
                selectionColor={Colors.primary}
                secureTextEntry={!isPasswordVisible}
                placeholderTextColor={Colors.intxt}
                style={{ backgroundColor: theme.input, color: Colors.disable, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }}
              ></TextInput>

              <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={theme.disable} size={20} />
              </TouchableOpacity>

            </View>
            <Text style={{ color: Colors.red, paddingTop: 0, fontSize: 13, marginLeft: 25, fontFamily: 'PlusJakartaSans-Regular' }}> {ErrPassword} </Text>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 5 }}>
              <CheckBox
                value={isSelected}
                onValueChange={() => setIsSelected(!isSelected)}
                tintColors={{ true: Colors.primary, false: Colors.primary }}
                boxType={'circle'}
                onTintColor={Colors.primary}
                onCheckColor={Colors.secondary}
                onFillColor={Colors.primary}
              />
              <Text style={{ color: theme.disable, fontFamily: 'PlusJakartaSans-Regular', marginLeft: 5 }}>Remember Me</Text>

              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgotpass')}>
                  <Text style={{ color: '#E53935', fontFamily: 'PlusJakartaSans-Regular' }}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingVertical: 30, }}>
              <TouchableOpacity onPress={() => handleSignIn()}
                style={style.btn}>
                
                
                {
                  isLoading ? <ActivityIndicator animating={true} color={MD2Colors.lightBlue100} /> :  <Text style={style.btntxt}>Sign In</Text>
                }
                
                

              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30 }}>
              <View style={style.divider}></View>
              <Text style={{ color: theme.disable, fontFamily: 'PlusJakartaSans-Regular', marginHorizontal: 10 }}>Or continue with</Text>
              <View style={style.divider}></View>
            </View>
            <View style={{ paddingTop: 30, }}>
              <TouchableOpacity style={[style.btn1, { borderColor: theme.txt, borderWidth: 1, backgroundColor: theme.bg }]}>
                <Image source={require('../../assets/image/Google.png')}
                  resizeMode='stretch'
                  style={{ width: width / 14, height: height / 30 }}></Image>
                <Text style={[style.btntxt1, { color: theme.txt }]}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingTop: 15 }}>
              <TouchableOpacity style={[style.btn1, { borderColor: theme.txt, borderWidth: 1, backgroundColor: theme.bg }]}>
                <Image source={theme.apple}
                  resizeMode='stretch'
                  style={{ width: width / 15, height: height / 28 }}></Image>
                <Text style={[style.btntxt1, { color: theme.txt }]}>Continue with Apple</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 40, marginBottom: 20 }}>
              <Text style={style.txt1}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[style.txt, { color: Colors.nbMessage, fontWeight: '500' }]}> Sign Up</Text>

              </TouchableOpacity>
            </View>

          </ScrollView>


        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}