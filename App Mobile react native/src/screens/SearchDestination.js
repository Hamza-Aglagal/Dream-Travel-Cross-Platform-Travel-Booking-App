import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, ImageBackground, Modal, KeyboardAvoidingView } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import SearchDestinationHook from '../Hook/Search-destination-hook';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SearchDestination() {

  const [dataDestination] = SearchDestinationHook()

  const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [like, setLike] = useState(false);
  const [like1, setLike1] = useState(false);
  const [like2, setLike2] = useState(true);
  const [like3, setLike3] = useState(true);
  const [like4, setLike4] = useState(false);
  const [like5, setLike5] = useState(false);

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

  const [visible, setVisible] = useState(false)

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>

      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
        <AppBar
          color={theme.bg}
          title="Search Destination"
          titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
          centerTitle={true}
          elevation={0}
          leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
            <Avatar.Icon icon="arrow-left"
              style={{ backgroundColor: theme.icon, }}
              color={theme.txt} size={45}
            />
          </TouchableOpacity>
          }
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <View style={[style.inputContainer, { backgroundColor: theme.input }]}>
            <Icon name="search" size={20} color={Colors.disable} />
            <TextInput placeholder='Search...'
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={{ color: Colors.active, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }} />

          </View>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>



          <View style={{ margin: 10 }}></View>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, backgroundColor: theme.input, borderRadius: 20, paddingRight: 10 }}>
            <TextInput placeholder='Location'
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.intxt}
              style={[style.txtinput, { fontFamily: 'PlusJakartaSans-Regular', flex: 1 }]}
            />
            <TouchableOpacity onPress={() => setVisible(true)}>
              <Icon name='location' color={theme.disable} size={20} />
            </TouchableOpacity>
          </View>
        </View>


        <ScrollView showsVerticalScrollIndicator={false}>



          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, justifyContent: 'space-between' }}>
            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Popular Destination</Text>
          </View>



          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ flex: 1 }}>
              <ImageBackground source={require('../../assets/image/i1.png')}
                resizeMode='stretch'
                style={{ height: height / 5.5, }}>
                <View style={{ alignItems: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setLike1(!like1)}>
                    <View style={style.favorite}>
                      <Icon name={like1 ? 'heart' : 'heart-outline'} size={18}
                        color={like1 ? '#E53935' : Colors.active}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Tahiti Beach</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='location' size={14} color={theme.disable}></Icon>
                <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>Polynesia, French </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$235</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='star' color={'#FFCD1A'}></Icon>
                  <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                  <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(32)</Text>
                </View>
              </View>
            </View>

            <View style={{ margin: 10 }}></View>

            <View style={{ flex: 1 }}>
              <ImageBackground source={require('../../assets/image/i2.png')}
                resizeMode='stretch'
                style={{ height: height / 5.5, }}>
                <View style={{ alignItems: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <View style={style.favorite}>
                      <Icon name={like ? 'heart' : 'heart-outline'} size={18}
                        color={like ? '#E53935' : Colors.active}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>St. Lucia Mountain</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='location' size={14} color={theme.disable}></Icon>
                <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>South America</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$182</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='star' color={'#FFCD1A'}></Icon>
                  <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                  <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(41)</Text>
                </View>
              </View>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ flex: 1 }}>
              <ImageBackground source={require('../../assets/image/i1.png')}
                resizeMode='stretch'
                style={{ height: height / 5.5, }}>
                <View style={{ alignItems: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setLike1(!like1)}>
                    <View style={style.favorite}>
                      <Icon name={like1 ? 'heart' : 'heart-outline'} size={18}
                        color={like1 ? '#E53935' : Colors.active}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Tahiti Beach</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='location' size={14} color={theme.disable}></Icon>
                <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>Polynesia, French </Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$235</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='star' color={'#FFCD1A'}></Icon>
                  <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                  <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(32)</Text>
                </View>
              </View>
            </View>

            <View style={{ margin: 10 }}></View>

            <View style={{ flex: 1 }}>
              <ImageBackground source={require('../../assets/image/i2.png')}
                resizeMode='stretch'
                style={{ height: height / 5.5, }}>
                <View style={{ alignItems: 'flex-end' }}>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <View style={style.favorite}>
                      <Icon name={like ? 'heart' : 'heart-outline'} size={18}
                        color={like ? '#E53935' : Colors.active}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
              <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>St. Lucia Mountain</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='location' size={14} color={theme.disable}></Icon>
                <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>South America</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$182</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='star' color={'#FFCD1A'}></Icon>
                  <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                  <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(41)</Text>
                </View>
              </View>
            </View>

          </View>


          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 18, justifyContent: 'space-between' }}>
            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>All</Text>
          </View>


          {dataDestination &&
            dataDestination.map((group, index) => (

              <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                {group.map((destination, index) => (

                  <TouchableOpacity onPress={() => navigation.navigate('DestinationDetail', { id: destination.id })} key={index} style={{ flex: 1, marginLeft: 5 , marginRight: 5, marginBottom:3}}>
                    <ImageBackground source={require('../../assets/image/i1.png')}
                      resizeMode='stretch'
                      style={{ height: height / 5.5, }}>
                      <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity onPress={() => setLike1(!like1)}>
                          <View style={style.favorite}>
                            <Icon name={like1 ? 'heart' : 'heart-outline'} size={18}
                              color={like1 ? '#E53935' : Colors.active}
                            />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </ImageBackground>
                    <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}> {destination.nom} </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name='location' size={14} color={theme.disable}></Icon>
                      <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>Polynesia, French </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='star' color={'#FFCD1A'}></Icon>
                        <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 13, marginHorizontal: 3 }]}>4.4</Text>
                        <Text style={[style.subtxt, { color: theme.disable, fontSize: 13 }]}>(32)</Text>
                      </View>
                    </View>
                  </TouchableOpacity>

                ))}

              </View>
            ))
          }


        </ScrollView>

      </View>






                {/* <View style={{ margin: 10 }}></View> */}






      <Modal transparent={true}
        visible={visible}>

        <View style={{
          flex: 1,
          backgroundColor: '#000000aa',
          transparent: 'true'
        }}>
          <View style={[style.modalcontainer, { backgroundColor: theme.bg, width: width - 20, marginTop: 20, }]}>
            <View style={{ marginHorizontal: 10 }}>
              <AppBar
                color={theme.bg}
                title='Location'
                titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                centerTitle={true}
                elevation={0}
                leading={<TouchableOpacity onPress={() => setVisible(false)}>
                  <Icons name="close"
                    color={theme.txt} size={25}
                  />
                </TouchableOpacity>
                } />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={[style.inputContainer, { backgroundColor: theme.input, flex: 1 }]}>
                  <Icon name='search' color={theme.disable} size={20} />
                  <TextInput placeholder='Search location' placeholderTextColor={Colors.disable}
                    style={{ color: theme.txt }}
                  />
                </View>
                <View style={{ paddingHorizontal: 10 }}></View>
                <View style={{ flex: 0.7 }}>
                  <TouchableOpacity onPress={() => { setVisible(false), navigation.navigate('VacationDetail') }}
                    style={[style.btn,]}>
                    <Text style={[style.txt,]}>Send</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <ScrollView>
                <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar.Icon icon='google-maps' color={theme.disable1} style={{ backgroundColor: theme.icon }} size={35} />
                  <View style={{ marginLeft: 10, width: width / 1.5, }}>
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Encinitas</Text>
                    <Text style={[style.subtxt, { color: theme.disable }]}>260-C North El CaminoReal</Text>
                  </View>
                </View>

                <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar.Icon icon='google-maps' color={theme.disable1} style={{ backgroundColor: theme.icon }} size={35} />
                  <View style={{ marginLeft: 10, width: width / 1.5, }}>
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>San Marcos</Text>
                    <Text style={[style.subtxt, { color: theme.disable }]}>591 Grand Avenue</Text>
                  </View>
                </View>

                <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar.Icon icon='google-maps' color={theme.disable1} style={{ backgroundColor: theme.icon }} size={35} />
                  <View style={{ marginLeft: 10, width: width / 1.5, }}>
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Roseville</Text>
                    <Text style={[style.subtxt, { color: theme.disable }]}>1186 Roseville Pkwy</Text>
                  </View>
                </View>

                <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                  <Avatar.Icon icon='google-maps' color={theme.disable1} style={{ backgroundColor: theme.icon }} size={35} />
                  <View style={{ marginLeft: 10, width: width / 1.5, }}>
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>San Ramon</Text>
                    <Text style={[style.subtxt, { color: theme.disable }]}>3141 Crow Canyon Place</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>


    </SafeAreaView>
  )
}