import { View, Text,SafeAreaView,Dimensions,TouchableOpacity,TextInput,Image,ScrollView,StatusBar, ImageBackground,Modal} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function CheckoutHotel() {

  const theme = useContext(themeContext);
  const navigation=useNavigation();
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false)
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
    <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
    <AppBar
        color={theme.bg}
        title="Checkout"
        titleStyle={{fontFamily:'PlusJakartaSans-Bold'}}
        centerTitle={true}
        elevation={0}
        leading={<TouchableOpacity onPress={()=>navigation.navigate('BookHotel')} >
            <Avatar.Icon icon="arrow-left"
                style={{ backgroundColor:theme.icon,}}
                color={theme.txt} size={45}
            />
        </TouchableOpacity>
        }
    />

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
          <Image source={require('../../assets/image/bed1.png')}
          resizeMode='stretch'
          style={{height:height/8,width:width/4,borderRadius:10}}></Image>
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

        <Text style={[style.subtitle,{fontSize:18,color:theme.txt,marginTop:20}]}>Promo Code</Text>
        <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input}]}>
            <TextInput placeholder='Input Code'
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.intxt}
                style={{backgroundColor:theme.input,color:Colors.disable, fontFamily:'PlusJakartaSans-Regular',flex:1,color:theme.txt}}
            ></TextInput>
            <TouchableOpacity style={{paddingHorizontal:25,backgroundColor:Colors.primary,paddingBottom:8,borderRadius:20,paddingTop:2}}>
                <Text style={[style.subtxt,{color:Colors.secondary}]}>Apply</Text>
            </TouchableOpacity>
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

        <Text style={[style.subtitle,{fontSize:18,color:theme.txt,marginTop:20}]}>Payment Method</Text>

        <View style={{flexDirection:'row',alignItems:'center',alignItems:'center',padding:10,borderWidth:1,marginTop:10,borderRadius:10,borderColor:Colors.border}}>
            <Image source={require('../../assets/image/visa.png')}
            resizeMode='stretch'
            style={{height:height/36,width:width/8}}>
            </Image>
            <View style={{flexDirection:'row',alignItems:'center',alignItems:'center',marginHorizontal:10,flex:1,}}>
                <Text style={[style.title,{color:theme.txt,lineHeight:20}]}>.... .... .... </Text>
                <Text style={[style.subtxt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>87652</Text>
            </View>
            <RadioButton
              
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}
           
            />
        </View>

        <View style={{flexDirection:'row',alignItems:'center',alignItems:'center',padding:10,borderWidth:1,marginVertical:20,borderRadius:10,borderColor:Colors.border}}>
            <Image source={require('../../assets/image/master.png')}
            resizeMode='stretch'
            style={{height:height/20,width:width/8}}>
            </Image>
            <View style={{flexDirection:'row',alignItems:'center',alignItems:'center',marginHorizontal:10,flex:1}}>
                <Text style={[style.title,{color:theme.txt,lineHeight:20}]}>.... .... .... </Text>
                <Text style={[style.subtxt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>87652</Text>
            </View>
            <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
            color={Colors.primary}
            uncheckedColor={Colors.bord}

            />
        </View>
        <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>setVisible(true)} 
            style={style.btn}>
               <Text style={style.btntxt}>Pay Now</Text>
            </TouchableOpacity>
          </View>

    </ScrollView> 
    </View>
    <Modal transparent={true}
        visible={visible}>
            <View style={{
                flex: 1,
                backgroundColor: '#000000aa',
                transparent: 'true'
            }}>
                <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 20 }]}>
                    <View style={{marginTop:10,marginHorizontal:20}}>
                        <Image source={require('../../assets/image/success2.png')} resizeMode='stretch'
                        style={{height:height/6,width:width/3,alignSelf:'center'}}
                        />
                    <Text style={[style.subtitle,{color:theme.txt,textAlign:'center',marginTop:10}]}>Order Successfull</Text>
                    <Text style={[style.txt,{color:theme.disable,textAlign:'center',marginTop:10}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <View style={{marginTop:20}}>
                        <TouchableOpacity onPress={()=>{setVisible(false), navigation.navigate('MyTabs')}}
                        style={[style.btn]}>
                            <Text style={[style.txt]}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </View>

    </Modal>
    </SafeAreaView>
  )
}