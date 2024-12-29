import {  View, Text ,SafeAreaView, TextInput, StatusBar,Modal,TouchableOpacity,Image,ScrollView,ImageBackground,Dimensions,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { Avatar } from 'react-native-paper';
import { AppBar} from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";



const width =Dimensions.get('screen').width
const height =Dimensions.get('screen').height

export default function User() {
 
    const theme = useContext(themeContext);
    const [darkMode,setDarkMode] = useState(false)
    const [checked, setChecked] = useState(false);
    const [visible,setVisible] = useState(false)
    const navigation=useNavigation();

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
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg}]}>
    <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
             <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/>
             <View style={[style.main,{backgroundColor:theme.bg}]}>
    <AppBar 
        color={theme.bg}
        title='Profile'
        titleStyle={{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}}
        centerTitle={true}
        elevation={0}
        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
          <Avatar.Icon icon="arrow-left"
              style={{ backgroundColor:theme.icon,}}
              color={theme.txt} size={45}
          />
        </TouchableOpacity>
        }/>

     <ScrollView showsVerticalScrollIndicator={false}>

     <View style={{
                paddingTop: 30,
                alignItems:'center',
                
                // height:'25%'
                 }}>
               
               <Avatar.Image source={require('../../assets/image/user.png')}
                   size={100}
                   style={{backgroundColor:Colors.secondary,}}></Avatar.Image>
                <View style={{position:'absolute',height:'30%',width:'20%',marginTop:100,alignItems:'center',right:105}}>
                <TouchableOpacity onPress={()=>setVisible(true)}>
                <Avatar.Image source={require('../../assets/image/edit.png')}
                size={30}
                style={{}}></Avatar.Image> 
                 <Modal
                        transparent={true}
                        visible={visible}
                    >
                        <View style={{
                            width: width,
                            flex: 1,
                            backgroundColor:'#000000aa',
                            transparent:'true',
                        }}>
                            <View style={[style.modalcontainer,{backgroundColor: theme.bg,width:width-20 }]}>
                              <View style={{paddingHorizontal:20,alignSelf:'flex-end'}}>
                                <TouchableOpacity onPress={()=>setVisible(false)}>
                                <Icon name='close-sharp' color={theme.txt}  size={20}/>
                                </TouchableOpacity>
                              </View>
                                <Text style={[style.logintitle,{color:theme.txt,alignSelf:'center'}]}>Change your picture</Text>
                                <View style={[style.divider1,{color:Colors.disable,marginBottom:20}]}></View>
                                <View style={{ 
                                  // paddingTop: 15 ,
                                  paddingVertical:15,
                                  backgroundColor:theme.input,
                                  borderRadius:10,
                                  paddingHorizontal:20,
                                  flexDirection:'row',
                                  alignItems:'center'
                                  }}>
                                  <Icon name='camera' size={25} color={theme.txt}/>  
                                  <Text style={[style.txt,{color:theme.txt,paddingLeft:15,fontFamily:'PlusJakartaSans-Bold'}]}>Take a photo</Text>
                                </View>
                               <View style={{paddingTop:15}}>
                               <View style={{
                                //  paddingTop: 15 ,
                                paddingVertical:15,
                                backgroundColor:theme.input,
                                borderRadius:10,
                                paddingHorizontal:20,
                                flexDirection:'row',
                                alignItems:'center'
                                }}>
                                <Icon name='folder-open-outline' size={25} color={theme.txt}/>  
                                <Text style={[style.txt,{color:theme.txt,paddingLeft:15,fontFamily:'PlusJakartaSans-Bold'}]}>Choose from your file</Text>                                
                                </View>
                               </View>
                                <View style={{ paddingTop: 15, }}>
                                <View style={{
                                //  paddingTop: 15 ,
                                paddingVertical:15,
                                backgroundColor:theme.input,
                                borderRadius:10,
                                paddingHorizontal:20,
                                flexDirection:'row',
                                alignItems:'center'
                                }}>
                                <Icon name='trash' size={25} color='#FF4747'/>  
                                <Text style={[style.txt,{color:'#FF4747',paddingLeft:15,fontFamily:'PlusJakartaSans-Bold'}]}>Delete Photo</Text>                                
                                </View>
                                </View>
                            </View>
                        </View>
             </Modal>
                </TouchableOpacity>
                   
                </View>            
                                
  </View>

  <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>First Name</Text>
      <View style={{paddingTop:10}}>
          <TextInput placeholder='Enter Your First Name'
          selectionColor={Colors.primary}
          placeholderTextColor={Colors.intxt}
          style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
          />
      </View>

          <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Last Name</Text>
        <View style={{paddingTop:10}}>
                    <TextInput placeholder='Enter Your Last Name'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.intxt}
                    style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
                    />
          </View> 

          <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Email</Text>
        <View style={{paddingTop:10}}>
                    <TextInput placeholder='Enter Your Email Address'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.intxt}
                    style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
                    />
          </View> 

          <Text style={{color:Colors.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Date of Birth</Text>
          <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input,marginTop:10}]}>
                    
              <TextInput value={selectDate}
                    selectionColor={Colors.primary}
                  style={{backgroundColor:theme.input,color:theme.txt, fontFamily:'PlusJakartaSans-Regular',flex:1}}
              />
              <TouchableOpacity onPress={showDatePicker}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <Icon name='calendar-outline' color={theme.disable} size={20} />
            </TouchableOpacity>
        </View>

          <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>
            <View style={[ style.radio,{width:width/2.4,paddingVertical:7,flexDirection:'row',backgroundColor:theme.input}]}>
            <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={Colors.primary}
            />
            <Text style={{ paddingTop: 8,fontWeight:'600',fontFamily:'PlusJakartaSans-Regular',color:theme.txt}}>Male</Text>
            </View>
            <View style={{margin:10}}></View>   
           <View style={[ style.radio,{width:width/2.4,paddingVertical:7,flexDirection:'row',backgroundColor:theme.input}]}>
           <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
              color={Colors.primary}/>
            <Text style={{ paddingTop: 8 ,fontWeight:'600',fontFamily:'PlusJakartaSans-Regular',color:theme.txt }}>Female</Text>
           </View>

          </View>

           <Text style={{color:theme.disable,marginTop:20,fontFamily:'PlusJakartaSans-Regular'}}>Location</Text>
            <View style={{paddingTop:10}}>
                    <TextInput placeholder='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    multiline={true}
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={[style.txtinput,{backgroundColor:theme.input,height:120,textAlignVertical: 'top',fontFamily:'PlusJakartaSans-Regular'}]}
                    />
            </View> 

          <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
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