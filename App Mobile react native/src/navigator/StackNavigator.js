import { View, Text, StatusBar } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from '../theme/themeContex';
import Splash from '../screens/Splash';
import theme from '../theme/theme';
import Introduction from '../screens/Introduction';
import Onboarding from '../screens/Onboarding';
import Otp from '../screens/Otp';
import Languagelist from '../screens/Languagelist';
import SelectExplore from '../screens/SelectExplore';
import Forgotpass from '../screens/Forgotpass';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import NewPassword from '../screens/NewPassword';
import Language from '../screens/Language';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Location from '../screens/Location';
import Location2 from '../screens/Location2';
import SearchDestination from '../screens/SearchDestination';
import BookVacation from '../screens/BookVacation';
import VacationDetail from '../screens/VacationDetail';
import TourGuide from '../screens/TourGuide';
import Review from '../screens/Review';
import BookHotel from '../screens/BookHotel';
import TicketBook from '../screens/TicketBook';
import TicketHistory from '../screens/TicketHistory';
import CheckoutHotel from '../screens/CheckoutHotel';
import TicketDetail from '../screens/TicketDetail';
import Chat from '../screens/Chat';
import Messagedelete from '../screens/InBox';
import MyAddress from '../screens/MyAddress';
import MyPayment from '../screens/MyPayment';
import NewCard from '../screens/NewCard';
import ChangePassword from '../screens/ChangePassword';
import NewAddress from '../screens/NewAddress';
import MyWishlist from '../screens/MyWishlist';
import Profile from '../screens/Profile';
import User from '../screens/User';
import Notification from '../screens/Notification';
import Legal from '../screens/Legal';
import Security from '../screens/Security';
import HelpSupport from '../screens/HelpSupport';
import Videocall from '../screens/Videocall';
import Call from '../screens/Call';
import MyTabs from './BottomNavigator';
import Language1 from '../screens/Language1';
import MessageN from '../screens/MessageN';
import Forgot from '../screens/Forgot';
import HotelDetail from '../screens/HotelDetail';
import DestinationDetail from '../screens/DestinationDetail';
import EvenementDetail from '../screens/EvenementDetail';
import AttractionDetail from '../screens/AttractionDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
            console.log(data)

        })

        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])

    const [showSplashScreen, setshowSplashScreen] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setshowSplashScreen(false);
        }, 400);


    }, [])



    const [showIntroduction, setShowIntroduction] = useState(true);
    useEffect(() => {
        AsyncStorage.getItem('appOpenedBefore')
            .then(key => {
                if (key === "true") {
                    setShowIntroduction(false);
                } else {
                    AsyncStorage.setItem('appOpenedBefore', 'true');
                }
            })
            .catch(err => {
                AsyncStorage.setItem('appOpenedBefore', 'true');
            });
    }, []);




    // useEffect(() => {
    //     AsyncStorage.getItem('token_Access')
    //         .then(token => {
    //             console.log("Token_access : " + token);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching token:", error);
    //         });
    //     AsyncStorage.getItem('user')
    //         .then(user => {
    //             console.log("user : " + user);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching user:", error);
    //         });
    // }, []);






    // useEffect(() => {
    //     AsyncStorage.removeItem('appOpenedBefore')
    //     AsyncStorage.removeItem('Language')
    //     AsyncStorage.removeItem('token_Access')
    //     AsyncStorage.removeItem('user')
    //     AsyncStorage.getItem('Language').then(value => console.log('test : ' + value))
    //     AsyncStorage.getAllKeys()
    //         .then(keys => {
    //             console.log('All keys: ', keys);
    //         })
    //         .catch(error => console.error('Error getting all keys:', error));
    // }, []);



    return (
        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>


                <Stack.Navigator>
                    {
                        showSplashScreen ?
                            <Stack.Screen
                                name="Splash"
                                component={Splash}
                                options={{ headerShown: false }} />
                            : null
                    }
                    {
                        showIntroduction &&
                        <Stack.Screen
                            name="Introduction"
                            component={Introduction}
                            options={{ headerShown: false }} />

                    }

                    {
                        showIntroduction &&
                        <Stack.Screen
                            name="Onboarding"
                            component={Onboarding}
                            options={{ headerShown: false }} />

                    }

                    <Stack.Screen
                        name="MyTabs"
                        component={MyTabs}
                        options={{ headerShown: false }} />


                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Forgotpass"
                        component={Forgotpass}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="NewPassword"
                        component={NewPassword}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Language"
                        component={Language}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Languagelist"
                        component={Languagelist}
                        options={{ headerShown: false }} />


                    <Stack.Screen
                        name="SelectExplore"
                        component={SelectExplore}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Explore"
                        component={Explore}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Location"
                        component={Location}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Location2"
                        component={Location2}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="SearchDestination"
                        component={SearchDestination}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="DestinationDetail"
                        component={DestinationDetail}
                        options={{ headerShown: false }} />


                    <Stack.Screen
                        name="BookVacation"
                        component={BookVacation}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="HotelDetail"
                        component={HotelDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="VacationDetail"
                        component={VacationDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="EvenementDetail"
                        component={EvenementDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="AttractionDetail"
                        component={AttractionDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="TourGuide"
                        component={TourGuide}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Review"
                        component={Review}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="BookHotel"
                        component={BookHotel}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="TicketHistory"
                        component={TicketHistory}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="CheckoutHotel"
                        component={CheckoutHotel}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="TicketDetail"
                        component={TicketDetail}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Messagedelete"
                        component={Messagedelete}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Chat"
                        component={Chat}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }} />


                    <Stack.Screen
                        name="MyAddress"
                        component={MyAddress}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="MyPayment"
                        component={MyPayment}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="NewCard"
                        component={NewCard}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="ChangePassword"
                        component={ChangePassword}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="NewAddress"
                        component={NewAddress}
                        options={{ headerShown: false }} />


                    <Stack.Screen
                        name="User"
                        component={User}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Notification"
                        component={Notification}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Legal"
                        component={Legal}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Security"
                        component={Security}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="HelpSupport"
                        component={HelpSupport}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Videocall"
                        component={Videocall}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Call"
                        component={Call}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Language1"
                        component={Language1}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="MessageN"
                        component={MessageN}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Forgot"
                        component={Forgot}
                        options={{ headerShown: false }} />



                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                        options={{ headerShown: false }} />


                </Stack.Navigator>




            </NavigationContainer>
        </themeContext.Provider>
    )
}