import { View, Text,SafeAreaView,Dimensions,TouchableOpacity,TextInput,Image,ScrollView,StatusBar, ImageBackground,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewAddress() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar
            color={theme.bg}
            title="New Address"
            titleStyle={{fontFamily:'PlusJakartaSans-Bold'}}
            centerTitle={true}
            elevation={0}
            leading={<TouchableOpacity onPress={()=>navigation.navigate('MyAddress')} >
                <Avatar.Icon icon="arrow-left"
                    style={{ backgroundColor:theme.icon,}}
                    color={theme.txt} size={45}
                />
            </TouchableOpacity>
            }
        />
        <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Full Name</Text>
        <View style={{paddingTop:10}}>
            <TextInput placeholder='Enter Your Full Name/Home/Office'
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.intxt}
            style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
            />
        </View>

        <Text style={{color:Colors.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Country</Text>
          <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input,marginTop:10}]}>
              <TextInput placeholder='Select Country'
                    selectionColor={Colors.primary}
                  placeholderTextColor={Colors.intxt}
                  style={{backgroundColor:theme.input,color:theme.txt, fontFamily:'PlusJakartaSans-Regular',flex:1}}
              ></TextInput>
              <TouchableOpacity >
                  <Icon name='chevron-down' color={theme.txt} size={20} />
              </TouchableOpacity>
        </View>

        <Text style={{color:Colors.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>City</Text>
          <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input,marginTop:10}]}>
              <TextInput placeholder='Select City'
                    selectionColor={Colors.primary}
                  placeholderTextColor={Colors.intxt}
                  style={{backgroundColor:theme.input,color:theme.txt, fontFamily:'PlusJakartaSans-Regular',flex:1}}
              ></TextInput>
              <TouchableOpacity >
                  <Icon name='chevron-down' color={theme.txt} size={20} />
              </TouchableOpacity>
        </View>

        <Text style={{color:Colors.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>State</Text>
          <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input,marginTop:10}]}>
              <TextInput placeholder='Select State'
                    selectionColor={Colors.primary}
                  placeholderTextColor={Colors.intxt}
                  style={{backgroundColor:theme.input,color:theme.txt, fontFamily:'PlusJakartaSans-Regular',flex:1}}
              ></TextInput>
              <TouchableOpacity >
                  <Icon name='chevron-down' color={theme.txt} size={20} />
              </TouchableOpacity>
        </View>

        <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Zip Code</Text>
        <View style={{paddingTop:10}}>
            <TextInput placeholder='Enter Your Zip Code'
            selectionColor={Colors.primary}
            placeholderTextColor={Colors.intxt}
            style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
            />
        </View>

        <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Detail Address</Text>
            <View style={{paddingTop:10}}>
                <TextInput placeholder='Enter Your Address'
                multiline={true}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[style.txtinput,{backgroundColor:theme.input,height:120,textAlignVertical: 'top',fontFamily:'PlusJakartaSans-Regular'}]}
                />
            </View>

        <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}
            style={style.btn}>
               <Text style={style.btntxt}>Save Changes</Text>
            </TouchableOpacity>
        </View>     

        </ScrollView>    
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}