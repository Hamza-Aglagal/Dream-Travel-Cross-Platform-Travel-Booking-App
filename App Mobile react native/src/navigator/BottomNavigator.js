import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
// import Icon from 'react-native-vector-icons/AntDesign'
import IconBot from 'react-native-vector-icons/MaterialCommunityIcons'
import IconChat from 'react-native-vector-icons/Ionicons'
import IconMap from 'react-native-vector-icons/Ionicons'

import Profile from '../screens/Profile';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Explore from '../screens/Explore';
import MyWishlist from '../screens/MyWishlist';
import User from '../screens/User';
import HotelDetail from '../screens/HotelDetail';
import Home from '../screens/Home';
import TicketBook from '../screens/TicketBook';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import InBox from '../screens/InBox';
import Location from '../screens/Location';
import Location2 from '../screens/Location2';
import ChatBot from '../screens/ChatBot';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState('false')


  // check if user exist or not 
  const [ExistUser, setExistUser] = useState(false)
  useEffect(() => {
    const checkUserExistence = async () => {
      try {
        const token = await AsyncStorage.getItem('token_Access');
        if (token) {
          setExistUser(true);
        } else {
          setExistUser(false);
        }
      } catch (error) {
        console.error('Error checking user existence:', error);
      }
    };
  
    checkUserExistence();
  }, []);
  





  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { position: 'absolute', left: '1%', width: '98%', height: 70, paddingBottom: 10, paddingTop: 10, borderRadius: 30, backgroundColor: theme.background },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarShowLabel: false,
      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          // tabBarShowLabel:true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.black : Colors.disable, fontFamily: 'PlusJakartaSans-Regular' }}>Home</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="home-outline" size={27}
              color={focused ? Colors.black : Colors.black} />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="MyWishlist" component={ExistUser ? MyWishlist : Login}
        options={{
          // tabBarShowLabel:true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.black : Colors.disable, fontFamily: 'PlusJakartaSans-Regular' }}>MyWishlist</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <Ionicons name="heart-outline" size={27}
              color={focused ? Colors.black : Colors.disable} />
          },
          headerShown: false,
        }} />



      <Tab.Screen name="ChatBot" component={ExistUser ? ChatBot : Login}
        options={({ navigation }) => ({
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.black : Colors.disable, fontFamily: 'PlusJakartaSans-Regular' }}>Explore</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <View style={styles.chatBotIconParent} >
              <View style={styles.chatBotIconChild} >
                <IconBot name="robot-outline" size={35}
                  color={focused ? Colors.primary : Colors.white} />
              </View>
            </View>
          },
          headerShown: false,
          tabBarStyle: { display: navigation.isFocused() ? 'none' : 'flex' }
        })}
      />


      <Tab.Screen name="Messagedelete" component={ExistUser ? InBox : Login}
        options={{
          // tabBarShowLabel:true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.black : Colors.disable, fontFamily: 'PlusJakartaSans-Regular' }}>User</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <IconChat name='chatbubbles-outline' size={30}
              color={focused ? Colors.black : Colors.disable} />
          },
          headerShown: false,
        }} />



      <Tab.Screen name="Map" component={ExistUser ? Location2 : Login}
        options={{
          // tabBarShowLabel:true,
          tabBarLabel: ({ focused, color, }) => (
            <Text style={{ color: focused ? Colors.black : Colors.disable, fontFamily: 'PlusJakartaSans-Regular' }}>Profile</Text>
          ),
          tabBarIcon: ({ focused, color }) => {
            return <IconMap name='map-outline' size={27}
              color={focused ? Colors.black : Colors.disable} />
          },
          headerShown: false,
        }} />

    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({


  chatBotIconParent: {
    width: 75,
    height: 75,
    backgroundColor: 'white',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },

  chatBotIconChild: {
    width: 65,
    height: 65,
    backgroundColor: 'black',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,

  },

  ParentPoint: {
    // backgroundColor:'red',
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Point: {
    width: 7,
    height: 7,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 3
  },


});