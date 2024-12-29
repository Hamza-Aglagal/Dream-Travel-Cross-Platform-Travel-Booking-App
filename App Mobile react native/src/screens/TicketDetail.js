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

export default function TicketDetail() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();
  
    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar
            color={theme.bg}
            title="Detail Ticket"
            titleStyle={{fontFamily:'PlusJakartaSans-Bold'}}
            centerTitle={true}
            elevation={0}
            leading={<TouchableOpacity onPress={()=>navigation.navigate('MyTabs')} >
                <Avatar.Icon icon="arrow-left"
                    style={{ backgroundColor:theme.icon,}}
                    color={theme.txt} size={45}
                />
            </TouchableOpacity>
            }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:theme.txt}]}>INV1273436347</Text>
            <Text style={[style.subtxt,{color:'#FF784B',paddingHorizontal:10,backgroundColor:'#FFF2ED',borderRadius:20,paddingBottom:5,paddingTop:2}]}>Will Come</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
          <Image source={require('../../assets/image/bed1.png')}
          resizeMode='stretch'
          style={{height:height/9,width:width/4,borderRadius:10}}></Image>
          <View style={{marginHorizontal:10}}>
              <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>The Lalit New Delhi</Text>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                  <Icon name='location' size={18} color={theme.disable1}></Icon>
                  <Text style={[style.subtxt,{color:theme.disable1}]}>Uttar Pradesh, India</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                  <Icon name='star' size={16} color={'#FFCD1A'}></Icon>
                  <Text style={[style.subtxt,{color:'#FFCD1A',marginHorizontal:5}]}>4.4</Text>
                  <Text style={[style.subtxt,{color:theme.disable}]}>(41 Reviews)</Text>
              </View>
          </View>
      </View>

      <Text style={[style.subtitle,{fontSize:18,color:theme.txt,marginTop:15}]}>Customer Info</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Name</Text>
            <Text style={[style.txt,{color:theme.txt}]}>Andy Lexian</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:5}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Email</Text>
            <Text style={[style.txt,{color:theme.txt}]}>Andylexian29@gmail.com</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Payment</Text>
            <Text style={[style.txt,{color:theme.txt}]}>Mastercard</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Status</Text>
            <Text style={[style.txt,{color:'#00C566'}]}>Success</Text>
        </View>

        <Text style={[style.subtitle,{fontSize:18,color:theme.txt,marginTop:15}]}>Order Info</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>length of stay</Text>
            <Text style={[style.txt,{color:theme.txt}]}>3 days 2 nights</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Chck In</Text>
            <Text style={[style.txt,{color:theme.txt}]}>June 12, 2022</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Chck Out</Text>
            <Text style={[style.txt,{color:theme.txt}]}>June 14, 2022</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Type Room</Text>
            <Text style={[style.txt,{color:theme.txt}]}>Presidential Suite</Text>
        </View>

        <View style={[style.divider1,{color:Colors.bord,height:1,marginBottom:10,marginHorizontal:10}]}></View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Total</Text>
            <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>$320</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
        <Text style={[style.txt,{color:Colors.disable}]}>Promo Code</Text>
        <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>HEZORKS</Text>
        </View>

        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Promo</Text>
            <Text style={[style.txt,{color:'#E53935',fontFamily:'PlusJakartaSans-Bold'}]}>-$20</Text>
        </View>
        <View style={[style.divider1,{color:Colors.bord,height:1,marginBottom:10,marginHorizontal:10}]}></View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
            <Text style={[style.txt,{color:Colors.disable}]}>Total Pay</Text>
            <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>$300</Text>
        </View>

        <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')} 
            style={style.btn}>
               <Text style={style.btntxt}>Download PDF</Text>
            </TouchableOpacity>
        </View>

        </ScrollView>
    </View>
    </SafeAreaView>
  )
}