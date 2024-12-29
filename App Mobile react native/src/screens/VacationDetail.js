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

export default function VacationDetail() {
  
    const theme = useContext(themeContext);
    const navigation=useNavigation();

    return (
        <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        {/* <View style={[style.main,{backgroundColor:theme.bg}]}> */}
        <StatusBar backgroundColor="transparent" translucent={true}/>
            <View>
            <ImageBackground source={require('../../assets/image/Taj.png')}
            resizeMode='stretch'
            style={{width:width,height:height/2.8,}}>
             <AppBar
                style={{ backgroundColor: 'transparent', boxShadow: 'none',marginTop:35,marginHorizontal:20,justifyContent:'center'}}
                title="Vacation Details"
                titleStyle={{fontFamily:'PlusJakartaSans-Bold'}}
                centerTitle={true}
                elevation={0}
                leading={<TouchableOpacity onPress={() => navigation.navigate('SearchDestination')} >
                    <Avatar.Icon icon="arrow-left"
                        style={{ backgroundColor:'transparent',}}
                        color={Colors.secondary} size={45}
                    />
                </TouchableOpacity>
                }
            />
           
            </ImageBackground>
            </View>
        {/* <View style={{backgroundColor:theme.bg,flex:1,borderTopLeftRadius:20,borderTopRightRadius:20}}> */}
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:-30,borderTopLeftRadius:40,borderTopRightRadius:40,marginHorizontal:-5}]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:20,marginTop:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View>
                        <Text style={[style.subtitle,{color:theme.txt}]}>Taj Mahal</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Icon name='location' color={theme.disable} size={18}></Icon>
                            <Text style={[style.subtxt,{color:theme.disable1,fontSize:12,marginHorizontal:5}]}>Uttar Pradesh, India</Text>
                            <Icon name='star' color={'#FFCD1A'} size={16}></Icon>
                            <Text style={[style.subtxt,{color:'#FFCD1A',fontSize:12,marginHorizontal:5}]}>4.4</Text>
                            <Text style={[style.subtxt,{color:theme.disable,fontSize:12}]}>(41 Reviews)</Text>
                        </View>
                    </View>
                    <View style={[style.favorite,{backgroundColor:theme.icon}]}>
                        <Icon name={'heart'} size={22} 
                        color={'#E53935'}
                        />
                    </View>
                </View>

                <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold',marginVertical:10}]}>Details</Text>
                <Text style={[style.subtxt,{color:theme.txt,}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor ac leo lorem nisl. Viverra vulputate sodales quis et dui, lacus. Iaculis eu egestas leo egestas vel. Ultrices ut magna nulla facilisi commodo enim, orci feugiat pharetra. Id sagittis, ullamcorper turpis ultrices platea pharetra.</Text>

                <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold',marginVertical:10}]}>Tour Guide</Text>
                <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                        <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>
                            <View style={{ width: width / 1.3, height: height / 6.2 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('TourGuide')}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View>
                                        <Image source={require('../../assets/image/guide1.png')} resizeMode='stretch'
                                            style={{ height: height / 8, width: width / 3.5 }}
                                        />
                                        <View style={{ paddingVertical: 5, backgroundColor: 'black', borderRadius: 20, marginTop: -15, width: width / 5, alignSelf: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                                <Text style={[style.txt, { color: '#FFFFFF', marginHorizontal: 3 }]}>4.0</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={[style.txt, { color: theme.txt,fontFamily:'PlusJakartaSans-Bold' }]}>Emilia Ricardo</Text>
                                        <Text style={[style.subtxt, { color: theme.disable, marginTop: 5 }]}>$25 (1 Day)</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Icon name='location' color={theme.txt} size={15} />
                                            <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>Polynesia, French </Text>
                                        </View>
                                    </View>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('TourGuide')}>
                            <View style={{ width: width / 1.3, height: height / 6.2 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        <Image source={require('../../assets/image/guide2.png')} resizeMode='stretch'
                                            style={{ height: height / 8, width: width / 3.5 }}
                                        />
                                        <View style={{ paddingVertical: 5, backgroundColor: 'black', borderRadius: 20, marginTop: -15, width: width / 5, alignSelf: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                                <Text style={[style.txt, { color: '#FFFFFF', marginHorizontal: 3 }]}>4.0</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={[style.txt, { color: theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>Jonsky Alexia</Text>
                                        <Text style={[style.subtxt, { color: theme.disable, marginTop: 5 }]}>$30 (1 Day)</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Icon name='location' color={theme.txt} size={15} />
                                            <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>South America</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10,justifyContent:'space-between'}}>
                        <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>Review</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
                        <Text style={[style.subtxt,{color:Colors.primary}]}>See All</Text>
                        </TouchableOpacity>
                    </View>    

                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <Image source={require('../../assets/image/Jhone.png')}
                    resizeMode='stretch'
                    style={{height:height/18,width:width/8.5}}></Image>
                <View style={{marginHorizontal:10,flex:1}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>Jhone Kenoady</Text>
                    <Text style={[style.subtxt,{color:theme.disable}]}>23 Nov 2022</Text>
                    </View>
                    <Text style={[style.subtxt,{fontSize:12}]}>⭐⭐⭐⭐⭐</Text>
                </View>
            
                </View>
                <Text style={[style.subtxt,{color:theme.txt,marginTop:5,lineHeight:18,marginLeft:55}]}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</Text>

                {/* <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold',marginVertical:10}]}>Location</Text> */}
                <Image source={require('../../assets/image/Location.png')}
                resizeMode='stretch'
                style={{height:height/3.5,width:width-40,marginVertical:10}}></Image>
            </ScrollView>    
    </View> 
    <View style={{backgroundColor:theme.bg,paddingVertical:20,paddingHorizontal:20,borderTopRightRadius:20,borderTopLeftRadius:20,borderColor:Colors.border,borderWidth:1}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={[style.title,{color:Colors.primary}]}>$32</Text>
                    <Text style={[style.subtxt,{color:Colors.disable,marginRight:10}]}>/ Person</Text>
                </View>
             <TouchableOpacity onPress={() => navigation.navigate('BookVacation')}
             style={[style.btn,{flex:1}]}>
                <Text style={[style.btntxt]}>Book Now!</Text>
             </TouchableOpacity> 
             </View>      
    </View> 
    </SafeAreaView>
  )
}