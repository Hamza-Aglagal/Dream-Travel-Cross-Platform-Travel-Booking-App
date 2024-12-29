import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, TextInput, Image, ScrollView, StatusBar, ImageBackground } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation, useRoute } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Explore() {

  const theme = useContext(themeContext);

  const navigation = useNavigation();
  const route = useRoute();

  const { param } = route.params;
  console.log('Id :', param)

  // ============================
  const [like, setLike] = useState(false);
  const [like1, setLike1] = useState(true);
  const [like2, setLike2] = useState(false);
  const [like3, setLike3] = useState(true);
  const [like4, setLike4] = useState(false);
  const [like5, setLike5] = useState(false);
  const [star, setstar] = useState(false);
  const [star1, setstar1] = useState(false);
  const [star2, setstar2] = useState(false);
  const [star3, setstar3] = useState(false);
  const [star4, setstar4] = useState(false);

  const categories = [ 'Hebergement', 'Attraction', 'Evenement'];



  const [categoryIndex, setcategoryIndex] = useState(0)
  const scrollViewRef = useRef(null);

   useEffect(() => {
    const index = categories.indexOf(param);
    if (index !== -1) {
      setcategoryIndex(index);
      scrollViewRef.current.scrollTo({ x: index * 50, animated: true });
    }
  }, [param]);

  const Categorylist = () => {
    return (<View style={style.categorycontainer}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index}
          activeOpacity={0.8}
          onPress={() => setcategoryIndex(index)}>
          <Text
            key={index}
            style={[
              style.categoryText, { color: theme.txt },
              categoryIndex == index && style.categoryTextSelected]}>
            {item}
          </Text>
        </TouchableOpacity>

      ))}
    </View>
    );
  };

 

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg, }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 30 }]}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
          <View style={[style.inputContainer, { backgroundColor: theme.input }]}>
            <Icon name="search" size={20} color={Colors.disable} />
            <TextInput placeholder='Search...'
              selectionColor={Colors.primary}
              placeholderTextColor={Colors.disable}
              style={{ color: Colors.active, fontFamily: 'PlusJakartaSans-Regular', flex: 1 }} />


            <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 10 }]}></View>
            <TouchableOpacity onPress={() => this.RBSheet1.open()}>
              <Image source={theme.filter}
                style={{ width: width / 20, height: height / 35 }}></Image>
              <RBSheet ref={ref => {
                this.RBSheet1 = ref;
              }}
                height={550}
                openDuration={100}
                customStyles={{
                  container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: theme.bg
                  }
                }}>
                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                  <AppBar
                    color={theme.bg}
                    title='Filter'
                    titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                    centerTitle={true}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => this.RBSheet1.close()}>
                      <Avatar.Icon icon="close"
                        style={{ backgroundColor: theme.icon, }}
                        color={theme.txt} size={40}
                      />
                    </TouchableOpacity>
                    }
                  />
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ paddingTop: 10 }}>
                      <Text style={[style.subtitle, { color: theme.txt }]}>Price Range</Text>
                      <ImageBackground source={require('../../assets/image/Linebg.png')} resizeMode='stretch'
                        style={{ width: width / 1.1, height: height / 205, marginTop: 15 }}
                      >
                        <View style={{ flexDirection: 'row' }}>
                          <Image source={require('../../assets/image/dot.png')} resizeMode='stretch'
                            style={{ justifyContent: 'center', height: height / 14, width: width / 6, marginTop: -23, marginRight: -65, marginLeft: 20 }}
                          />
                          <Image source={require('../../assets/image/Line.png')} resizeMode='stretch'
                            style={{ width: width / 2.5, marginLeft: 40, height: height / 210 }}
                          />
                          <Image source={require('../../assets/image/dot.png')} resizeMode='stretch'
                            style={{ justifyContent: 'center', height: height / 14, width: width / 6, marginTop: -23, marginLeft: -26 }}
                          />
                        </View>
                      </ImageBackground>
                    </View>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ paddingHorizontal: 30, paddingVertical: 5, borderColor: '#E9EBED', borderWidth: 1, borderRadius: 10 }}>
                        <Text style={[style.txt, { color: Colors.primary, fontFamily: 'PlusJakartaSans-Bold' }]}>$32</Text>
                      </View>
                      <View style={{ paddingHorizontal: 25, paddingVertical: 5, borderColor: '#E9EBED', borderWidth: 1, borderRadius: 10 }}>
                        <Text style={[style.txt, { color: Colors.primary, fontFamily: 'PlusJakartaSans-Bold' }]}>$105</Text>
                      </View>
                    </View>
                    <Text style={[style.subtitle, { color: theme.txt, paddingTop: 20 }]}>Popular Filters</Text>

                    <View>

                      <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                        {/* <Categorylist1 /> */}
                      </ScrollView>

                    </View>

                    <Text style={[style.subtitle, { color: theme.txt, marginTop: -15 }]}>Star Rating</Text>
                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                      <ScrollView nestedScrollEnabled={true} showsHorizontalScrollIndicator={false} horizontal>

                        <TouchableOpacity onPress={() => setstar(!star)} >
                          <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderColor: star ? '#FFCD1A' : Colors.bord, borderWidth: 1, borderRadius: 15, }}>
                            <Icon name='star' size={20} color='#FFCD1A' />
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setstar1(!star1)}>
                          <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderColor: star1 ? '#FFCD1A' : Colors.bord, borderWidth: 1, borderRadius: 15, flexDirection: 'row', marginLeft: 10 }}>
                            <Icon name='star' size={20} color='#FFCD1A' />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginHorizontal: 5 }} />
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setstar2(!star2)}>
                          <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderColor: star2 ? '#FFCD1A' : Colors.bord, borderWidth: 1, borderRadius: 15, flexDirection: 'row', marginLeft: 10 }}>
                            <Icon name='star' size={20} color='#FFCD1A' />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginHorizontal: 5 }} />
                            <Icon name='star' size={20} color='#FFCD1A' />
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setstar3(!star3)}>
                          <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderColor: star3 ? '#FFCD1A' : Colors.bord, borderWidth: 1, borderRadius: 15, flexDirection: 'row', marginLeft: 10 }}>
                            <Icon name='star' size={20} color='#FFCD1A' />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginHorizontal: 5 }} />
                            <Icon name='star' size={20} color='#FFCD1A' />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginLeft: 5 }} />
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setstar4(!star4)}>
                          <View style={{ paddingHorizontal: 10, paddingVertical: 5, borderColor: star4 ? '#FFCD1A' : Colors.bord, borderWidth: 1, borderRadius: 15, flexDirection: 'row', marginLeft: 10 }}>
                            <Icon name='star' size={20} color='#FFCD1A' />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginHorizontal: 5 }} />
                            <Icon name='star' size={20} color='#FFCD1A' />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginLeft: 5 }} />
                            <Icon name='star' size={20} color='#FFCD1A' style={{ marginLeft: 5 }} />
                          </View>
                        </TouchableOpacity>

                      </ScrollView>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                      <TouchableOpacity onPress={() => { this.RBSheet1.close(), navigation.navigate('SearchDestination') }}
                        style={[style.btn]}>
                        <Text style={[style.txt]}>Apply Filter</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 20, }}>
                      <TouchableOpacity onPress={() => this.RBSheet1.close()}>
                        <Text style={[style.txt, { color: '#F41F52', textAlign: 'center', fontFamily: 'PlusJakartaSans-Bold' }]}>Clear All</Text>
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                </View>
              </RBSheet>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef} >
            <Categorylist></Categorylist>
          </ScrollView>
        </View>


        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
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
              </TouchableOpacity>
            </View>

            <View style={{ margin: 10 }}></View>


            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
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
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>


            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                <ImageBackground source={require('../../assets/image/i3.png')}
                  resizeMode='stretch'
                  style={{ height: height / 5.5, }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setLike2(!like2)}>
                      <View style={style.favorite}>
                        <Icon name={like2 ? 'heart' : 'heart-outline'} size={18}
                          color={like2 ? '#E53935' : Colors.active}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Cappadocia</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='location' size={14} color={theme.disable} ></Icon>
                  <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>Turki</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$282</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='star' color={'#FFCD1A'}></Icon>
                    <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                    <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(32)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>


            <View style={{ margin: 10 }}></View>


            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                <ImageBackground source={require('../../assets/image/i4.png')}
                  resizeMode='stretch'
                  style={{ height: height / 5.5, }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setLike3(!like3)}>
                      <View style={style.favorite}>
                        <Icon name={like3 ? 'heart' : 'heart-outline'} size={18}
                          color={like3 ? '#E53935' : Colors.active}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Hanalei Bay</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name='location' size={14} color={theme.disable}></Icon>
                  <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>Hawaii</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$182</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='star' color={'#FFCD1A'}></Icon>
                    <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                    <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(41)</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>


          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginBottom: 90 }}>


            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                <ImageBackground source={require('../../assets/image/i5.png')}
                  resizeMode='stretch'
                  style={{ height: height / 5.5, }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setLike4(!like4)}>
                      <View style={style.favorite}>
                        <Icon name={like4 ? 'heart' : 'heart-outline'} size={18}
                          color={like4 ? '#E53935' : Colors.active}
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
              </TouchableOpacity>
            </View>

            <View style={{ margin: 10 }}></View>


            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                <ImageBackground source={require('../../assets/image/i6.png')}
                  resizeMode='stretch'
                  style={{ height: height / 5.5, }}>
                  <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => setLike5(!like5)}>
                      <View style={style.favorite}>
                        <Icon name={like5 ? 'heart' : 'heart-outline'} size={18}
                          color={like5 ? '#E53935' : Colors.active}
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
              </TouchableOpacity>
            </View>

          </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  )
}