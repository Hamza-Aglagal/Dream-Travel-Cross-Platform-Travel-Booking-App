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

export default function TourGuide() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
         <StatusBar backgroundColor="transparent" translucent={true}/>
        <View>
        <ImageBackground source={require('../../assets/image/Taj1.png')}
        resizeMode='stretch'
        style={{width:width,height:height/3.5,}}>
            <AppBar
            style={{ backgroundColor: 'transparent', boxShadow: 'none',marginTop:35,marginHorizontal:20,justifyContent:'center'}}
            title="Profile"
            titleStyle={{fontFamily:'PlusJakartaSans-Bold',color:Colors.active}}
            centerTitle={true}
            elevation={0}
            leading={<TouchableOpacity onPress={()=>navigation.navigate('MyTabs')} >
                <Avatar.Icon icon="arrow-left"
                    style={{ backgroundColor:'transparent',}}
                    color={Colors.active} size={45}
                />
            </TouchableOpacity>
            }
        />
        
        </ImageBackground>
        </View>
       
    <View style={[style.main,{backgroundColor:theme.bg}]}>
       
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:22}}>
            <Text style={[style.subtitle,{color:theme.txt,marginTop:40}]}>Jonsky Alexia</Text>
            <Text style={[style.subtxt,{color:Colors.disable}]}>International tour guide in<Text style={{color:theme.txt}}> india</Text></Text>
            <Text style={[style.subtxt,{color:Colors.disable}]}>Travel and food vlogger</Text>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
                <TouchableOpacity style={[style.btn,{flex:1.5,paddingVertical:10,borderRadius:10}]}>
                    <Text style={[style.btntxt,{fontSize:12}]}>Send Message</Text>
                </TouchableOpacity> 
                <View style={{margin:10}}></View>
                <TouchableOpacity style={[style.btn,{flex:1,borderRadius:10,paddingVertical:10,backgroundColor:'#E3E9ED'}]}>
                    <Text style={[style.btntxt,{color:Colors.active,fontSize:12}]}>Call Now</Text>
                </TouchableOpacity> 
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',marginTop:20,marginBottom:10}}>
                <View>                        
                    <Text style={[style.subtxt,{color:theme.disable}]}>Guide</Text>
                    <Text style={[style.txt1,{color:Colors.primary,textAlign:'center'}]}>700+</Text>
                </View>

                <View style={[style.verticaldivider,{backgroundColor:'#D1D8DD'}]}></View>

                <View>                        
                    <Text style={[style.subtxt,{color:theme.disable}]}>Experience</Text>
                    <Text style={[style.txt1,{color:Colors.primary,textAlign:'center'}]}>3 Years</Text>
                </View>

                <View style={[style.verticaldivider,{backgroundColor:'#D1D8DD'}]}></View>

                <View>                        
                    <Text style={[style.subtxt,{color:theme.disable}]}>Rate</Text>
                    <Text style={[style.txt1,{color:Colors.primary,textAlign:'center'}]}>4.0<Text style={{color:Colors.disable,fontSize:14}}>/5</Text></Text>
                </View>
            </View>

            <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold',marginVertical:10}]}>About Us</Text>
            <Text style={[style.subtxt,{color:theme.txt,}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla facilisi commodo enim, orci feugiat pharetra. Id sagittis, ullamcorper turpis ultrices platea pharetra.</Text>

            <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold',marginVertical:10}]}>Location</Text>
            <Image source={require('../../assets/image/Location1.png')}
                resizeMode='stretch'
                style={{height:height/5,width:width-40,marginBottom:20,}}></Image>

        </ScrollView>
    </View>
    <View style={{position:'absolute',top:200,left:20}}>
                <Image source={require('../../assets/image/guide2.png')}
                resizeMode='stretch'
                style={{height:height/9,width:width/4}}></Image>
        </View>
    </SafeAreaView>
  )
}