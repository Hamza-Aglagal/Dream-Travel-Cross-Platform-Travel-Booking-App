import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import { Avatar } from 'react-native-paper';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Forgot() {
    
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
         <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
        {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:30}]}>
            <AppBar 
            color={theme.bg}
            title='Forgot Password'
            titleStyle={{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}}
            centerTitle={true}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
            <Avatar.Icon icon="arrow-left"  
            style={{backgroundColor:theme.icon,}}  
            color={theme.txt} size={45}
            />
            </TouchableOpacity>
            }/>

    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:theme.fpb,paddingVertical:20,paddingHorizontal:10,marginVertical:30,borderRadius:10}}>    
        <Avatar.Icon icon="information-variant"  
            style={{backgroundColor:'#BDBDBD',}}  
            color='white' size={25}
            />
        <View style={{marginLeft:10,marginRight:10}}>
           <Text style={{color:theme.txt,fontFamily:'PlusJakartaSans-Regular'}}>We will send the OTP code to your email for security in forgetting your password</Text>
        </View>
    </View>

    <Text style={{color:Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>Email</Text>
        <View style={{paddingVertical:10}}>
                    <TextInput placeholder='Adeasdewidow29@gmail.com'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.intxt}
                    
                    style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular',color:theme.txt}]}
                    />
        </View>
        
        <View style={{justifyContent:'flex-end',flex:1,marginBottom:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Profile')}
            style={style.btn}>
               <Text style={style.btntxt}>Submit</Text>
            </TouchableOpacity>
        </View>  
</View>
</KeyboardAvoidingView>
    </SafeAreaView>
  )
}