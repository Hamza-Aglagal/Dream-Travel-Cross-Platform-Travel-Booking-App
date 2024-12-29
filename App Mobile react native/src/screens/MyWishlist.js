import { View, Text, SafeAreaView, Dimensions, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import WishListHook from '../Hook/Wishlist-hook';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function MyWishlist() {
  const [dataDestination] = WishListHook();
  const theme = useContext(themeContext);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    // Retrieve likes from AsyncStorage when the component mounts
    const fetchLikes = async () => {
      try {
        const storedLikes = await AsyncStorage.getItem('likes');
        if (storedLikes !== null) {
          setLikes(JSON.parse(storedLikes));
        } else {
          setLikes(dataDestination.map(item => item.liked));
        }
      } catch (error) {
        console.error("Failed to load likes from storage", error);
      }
    };
    fetchLikes();
  }, [dataDestination]);

  const toggleLike = async (index) => {
    try {
      setLikes(prevLikes => {
        const newLikes = [...prevLikes];
        newLikes[index] = !newLikes[index];
        AsyncStorage.setItem('likes', JSON.stringify(newLikes));
        return newLikes;
      });
    } catch (error) {
      console.error("Failed to save likes to storage", error);
    }
  };

  // Group dataDestination into pairs
  const groupData = (data) => {
    const groupedData = [];
    for (let i = 0; i < data.length; i += 2) {
      groupedData.push(data.slice(i, i + 2));
    }
    return groupedData;
  };

  const groupedData = groupData(dataDestination);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
      <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
        <AppBar
          color={theme.bg}
          title="My Wishlist"
          titleStyle={{ fontFamily: 'PlusJakartaSans-Bold' }}
          centerTitle={true}
          elevation={0}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>
          {groupedData.map((group, groupIndex) => (
            <View key={groupIndex} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
              {group.map((item, index) => (
                <View key={index} style={{ flex: 1, marginRight: index % 2 === 0 ? 10 : 0 }}>
                  <ImageBackground source={require('../../assets/image/beach.png')} resizeMode='stretch' style={{ height: height / 5.5 }}>
                    <View style={{ alignItems: 'flex-end' }}>
                      <TouchableOpacity onPress={() => toggleLike(groupIndex * 2 + index)}>
                        <View style={style.favorite}>
                          <Icon
                            name={likes[groupIndex * 2 + index] ? 'heart' : 'heart-outline'}
                            size={18}
                            color={likes[groupIndex * 2 + index] ? '#E53935' : Colors.active}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                  <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}> {item.nom}  </Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='location' size={14} color={theme.disable}></Icon>
                    <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>  {item.localisation.rue + ' , ' + item.localisation.ville} </Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.price}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name='star' color={'#FFCD1A'}></Icon>
                      <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>
                        {item.rating ? item.rating : 3 }
                      </Text>
                      <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>  {`(${item.num_reviews})`} </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
