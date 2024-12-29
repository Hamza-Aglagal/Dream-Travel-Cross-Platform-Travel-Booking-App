import { View, Text,SafeAreaView,Dimensions,TouchableOpacity,TextInput,Image,ScrollView,StatusBar, ImageBackground} from 'react-native'
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

export default function Call() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    
    return (
        <SafeAreaView style={{flex:1}}>
        <StatusBar backgroundColor="transparent" barstyle={'light-content'} translucent={true}/>


      <ImageBackground source={ require('../../assets/image/call.png')}
        style={{flex:1}}>

            <AppBar
                style={{ backgroundColor: 'transparent', boxShadow: 'none',marginTop:35,marginHorizontal:20,justifyContent:'center'}}
                elevation={0}
                leading={<TouchableOpacity onPress={()=>navigation.navigate('Chat')} >
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor:theme.icon,}}
                        color={theme.txt} size={45}
                    />
                </TouchableOpacity>
                }
            />

       <View style={{flex:1,}}>

       </View>
       <View style={{flex:0.55, paddingHorizontal:20,}}>
          
            <View style={{alignItems:'center'}}>
                <Image source={require('../../assets/image/List.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6.2}}></Image>
            </View>
            <View style={{alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                <Image source={require('../../assets/image/List1.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6.2}}></Image>
                <View style={{marginHorizontal:10}}></View>
                <Image source={require('../../assets/image/List2.png')}
                resizeMode='stretch'
                style={{height:height/14,width:width/6.2}}></Image>
            </View>

            <View style={{flex:1,justifyContent:'flex-end',marginBottom:30,}}>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,padding:10,backgroundColor: Colors.active, borderRadius:30,}}>
                <Image source={require('../../assets/image/chat1.png')}
                resizeMode='stretch'
                style={{height:height/18,width:width/8}}></Image>
                <View style={{marginHorizontal:10,flex:1}}>
                    <Text style={[style.txt,{color:theme.disable,fontFamily:'PlusJakartaSans-Bold'}]}>Richar Kandowen</Text>
                    <Text style={[style.subtxt,{fontSize:12,color:theme.disable}]}>Tour guide, sweden</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                   <View style={{height:5,width:5,borderRadius:20,backgroundColor:'#E53935'}}></View>
                   <Text style={[style.subtxt,{fontSize:12,color:theme.disable,marginLeft:10}]}>07.23</Text> 
                </View>
            </View>
            </View>
       </View>

      </ImageBackground>
   
    </SafeAreaView>
  )
}