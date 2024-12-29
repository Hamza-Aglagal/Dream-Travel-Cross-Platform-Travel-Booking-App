import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    ImageBackground,
    ScrollView
} from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
// import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet';
import HomeHook from '../Hook/home-hook'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllDestination } from '../redux/actions/DestinationAction'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {


    const [dataDestination, dataAttraction, dataEvenement, dataHebergement] = HomeHook()



    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const [like, setlike] = useState(false)

    const [likes, setLikes] = useState([]);


    useEffect(() => {
        // Fetch likes from AsyncStorage on mount
        const fetchLikes = async () => {
            try {
                const storedLikes = await AsyncStorage.getItem('likes');
                if (storedLikes) {
                    setLikes(JSON.parse(storedLikes));
                }
            } catch (error) {
                console.error('Failed to fetch likes from storage', error);
            }
        };
        fetchLikes();
    }, []);

    const handleLike = async (id) => {
        try {
            let updatedLikes = [...likes];
            if (updatedLikes.includes(id)) {
                updatedLikes = updatedLikes.filter(likeId => likeId !== id);
            } else {
                updatedLikes.push(id);
            }
            setLikes(updatedLikes);
            await AsyncStorage.setItem('likes', JSON.stringify(updatedLikes));
        } catch (error) {
            console.error('Failed to update likes in storage', error);
        }
    };


    const [DataUser, setDataUser] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user => {
                const userData = JSON.parse(user);
                setDataUser(userData);
            })
            .catch(error => {
                setDataUser(null);
            });

    }, []);



    // filter 
    const [searchQuery, setSearchQuery] = useState('');
    const [Datafiltred, setDatafiltred] = useState([])


    useEffect(() => {
        if (searchQuery) {
            const filtered = dataDestination.filter(destination =>
                destination.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
                destination.localisation.ville.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setDatafiltred(filtered);
        }  
    }, [searchQuery]);



    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>

            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 30 }]}>

                <View style={{ flexDirection: 'row', alignItems: 'center', }}>


                    <View style={{ marginLeft: 15 }}>

                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>
                            Hi, {DataUser && DataUser.nom ? DataUser.nom : 'Sir'}
                        </Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* <Icons name='location' color={theme.disable} size={15} /> */}
                            <Text style={[style.subtxt, { color: theme.disable, marginLeft: 1 }]}>Find your dream travel</Text>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>

                        <TouchableOpacity onPress={() => navigation.navigate('MessageN')}>
                            <Avatar.Image
                                size={40}
                                source={theme.notification}
                                style={{ backgroundColor: theme.bg }}
                            />
                        </TouchableOpacity>

                        <View style={{ margin: 5 }}></View>
                        {/* <TouchableOpacity onPress={() => navigation.navigate('Messagedelete')}>
                            <Avatar.Image
                                size={40}
                                source={theme.message}
                                style={{ backgroundColor: theme.bg }}
                            />
                        </TouchableOpacity> */}

                    </View>


                    <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                        <Avatar.Image source={require('../../assets/image/user.png')}
                            size={50}

                        />
                    </TouchableOpacity>

                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <View style={[style.inputContainer, { backgroundColor: theme.background }]}>

                        <Icons name="search" size={20} color={Colors.disable} onPress={() => navigation.navigate('SearchDestination')} />
                        <TextInput placeholder="search"
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.disable}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            style={{ flex: 1, color: Colors.active, fontFamily: 'PlusJakartaSans-Regular' }} />



                        <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 10 }]}></View>
                        <Image source={theme.filter} style={{ width: width / 20, height: height / 40 }}></Image>


                    </View>
                </View>

                {

                    Datafiltred.length > 0 &&
                    <ScrollView style={{ marginTop: 25 }} nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>

                        {
                            Datafiltred.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={{ flex: 1, marginRight: 10 }}
                                    onPress={() => navigation.navigate('DestinationDetail', { id: item.id })}
                                >
                                    <ImageBackground
                                        source={item.images ? { uri: item.images[0] } : require('../../assets/image/beach.png')}
                                        resizeMode='stretch'
                                        style={{ height: height / 5.5, width: width / 2 }}
                                        imageStyle={{ borderRadius: 10 }}
                                    >
                                        <View style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
                                            <View style={{ alignItems: 'flex-end', padding: 5 }}>
                                                <TouchableOpacity onPress={() => handleLike(item.id)}>
                                                    <View style={style.favorite}>
                                                        <Icon
                                                            name={likes.includes(item.id) ? 'heart' : 'heart-outline'}
                                                            size={18}
                                                            color={likes.includes(item.id) ? '#E53935' : theme.active}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </ImageBackground>

                                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginTop: 5 }]}>
                                        {item.nom}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icons name='location' size={14} color={theme.disable} />
                                        <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>
                                            {item.localisation.rue + ' , ' + item.localisation.ville}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}></Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icon name='star' color={'#FFCD1A'} />
                                            <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                                            <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(32)</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }




                    </ScrollView>

                }

                {

                    dataDestination && !Datafiltred.length > 0 &&
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}>


                        <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <Text style={[style.subtitle, { color: theme.txt }]}> Recommended </Text>

                            <View style={{ flexDirection: 'row', marginHorizontal: 2, }}>

                                <View style={[style.indicator,
                                {
                                    borderColor: Colors.Seeall,
                                    borderWidth: 1,
                                    paddingHorizontal: 12,
                                    borderRadius: 10,
                                    backgroundColor: Colors.Seeall,
                                    alignItems: 'center',
                                    // marginHorizontal:5
                                }]}>

                                </View>

                                <View style={[style.indicator,]}>
                                </View>
                                <View style={[style.indicator,]}>
                                </View>

                            </View>

                        </View>



                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>

                            <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>



                                {
                                    dataDestination ? dataDestination.map((item, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={{ flex: 1, marginRight: 10 }}
                                            onPress={() => navigation.navigate('DestinationDetail', { id: item.id })}
                                        >
                                            <ImageBackground
                                                source={item.images ? { uri: item.images[0] } : require('../../assets/image/beach.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 5.5, width: width / 2 }}
                                                imageStyle={{ borderRadius: 10 }}
                                            >
                                                <View style={{ flex: 1, borderRadius: 10, overflow: 'hidden' }}>
                                                    <View style={{ alignItems: 'flex-end', padding: 5 }}>
                                                        <TouchableOpacity onPress={() => handleLike(item.id)}>
                                                            <View style={style.favorite}>
                                                                <Icon
                                                                    name={likes.includes(item.id) ? 'heart' : 'heart-outline'}
                                                                    size={18}
                                                                    color={likes.includes(item.id) ? '#E53935' : theme.active}
                                                                />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </ImageBackground>

                                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginTop: 5 }]}>
                                                {item.nom}
                                            </Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                <Icons name='location' size={14} color={theme.disable} />
                                                <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>
                                                    {item.localisation.rue + ' , ' + item.localisation.ville}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}></Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Icon name='star' color={'#FFCD1A'} />
                                                    <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                                                    <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(32)</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )) : null
                                }




                            </ScrollView>

                        </View>


                        <View style={{ paddingTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={[style.subtitle, { color: theme.txt }]}> Popular Destination </Text>
                            <TouchableOpacity>
                                <Text style={[style.txt, { color: Colors.Seeall }]} onPress={() => navigation.navigate('SearchDestination', { param: 'Popular' })} >See All</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ paddingTop: 20, flexDirection: 'row' }}>

                            <ScrollView nestedScrollEnabled={false} horizontal showsHorizontalScrollIndicator={false}>


                                {
                                    dataDestination
                                        ? dataDestination.map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={{ flex: 1, marginRight: 10 }}
                                                onPress={() => navigation.navigate('DestinationDetail', { id: item.id })}
                                            >
                                                <ImageBackground
                                                    source={item.images ? { uri: item.images[0] } : require('../../assets/image/beach.png')}
                                                    resizeMode="stretch"
                                                    style={{ height: height / 5.5, width: width / 2 }}
                                                    imageStyle={{ borderRadius: 10 }}
                                                >
                                                    <View style={{ alignItems: 'flex-end' }}>
                                                        <TouchableOpacity onPress={() => handleLike(item.id)}>
                                                            <View style={style.favorite}>
                                                                <Icon
                                                                    name={likes.includes(item.id) ? 'heart' : 'heart-outline'}
                                                                    size={18}
                                                                    color={likes.includes(item.id) ? '#E53935' : Colors.active}
                                                                />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                </ImageBackground>

                                                <Text
                                                    style={[
                                                        style.txt,
                                                        { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginTop: 5 },
                                                    ]}
                                                >
                                                    {item.nom}
                                                </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                                    <Icons name="location" size={14} color={theme.disable} />
                                                    <Text
                                                        style={[
                                                            style.subtxt,
                                                            { color: theme.disable, marginLeft: 5 },
                                                        ]}
                                                    >
                                                        {item.localisation.rue + ' , ' + item.localisation.ville}
                                                    </Text>
                                                </View>
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        marginTop: 5,
                                                    }}
                                                >
                                                    <Text
                                                        style={[
                                                            style.txt,
                                                            { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' },
                                                        ]}
                                                    ></Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Icon name="star" color={'#FFCD1A'}></Icon>
                                                        <Text
                                                            style={[
                                                                style.subtxt,
                                                                { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 },
                                                            ]}
                                                        >
                                                            {item.average_rating === "null" ? '1' : item.average_rating}
                                                        </Text>
                                                        <Text
                                                            style={[
                                                                style.subtxt,
                                                                { color: theme.disable, fontSize: 11 },
                                                            ]}
                                                        >
                                                            ({item.num_reviews})
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        ))
                                        : null
                                }



                            </ScrollView>
                        </View>


                        <View style={{ marginTop: 20 }}>

                            <View style={{ paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={[style.subtitle, { color: theme.txt }]}> Hebergement </Text>
                                <TouchableOpacity>
                                    <Text style={[style.txt, { color: Colors.Seeall }]} onPress={() => navigation.navigate('Explore', { param: 'Hebergement' })} >See All</Text>
                                </TouchableOpacity>
                            </View>



                            {

                                dataHebergement ? dataHebergement.map((item, index) =>

                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('HotelDetail')}>

                                        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: theme.disable, marginTop: 15 }]}> {item.type} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                                    <Icons name='location' color={theme.disable} size={15} />
                                                    <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>



                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: theme.disable }]}>/Person</Text></Text>
                                            </View>



                                        </View>

                                    </TouchableOpacity>

                                ) : null

                            }



                        </View>




                        <View style={{ marginTop: 20 }}>

                            <View style={{ paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={[style.subtitle, { color: theme.txt }]}> Evenements </Text>
                                <TouchableOpacity>
                                    <Text style={[style.txt, { color: Colors.Seeall }]} onPress={() => navigation.navigate('Explore', { param: 'Evenement' })} >See All</Text>
                                </TouchableOpacity>
                            </View>



                            {

                                dataEvenement ? dataEvenement.map((item, index) =>

                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('EvenementDetail')}>

                                        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: theme.disable, marginTop: 5 }]}> {item.description.slice(0, 22)} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                    <Icons name='location' color={theme.disable} size={15} />
                                                    <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                    <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>{item.date_debut}   to   {item.date_fin} </Text>
                                                </View>


                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: theme.disable }]}>/Person</Text></Text>
                                            </View>



                                        </View>

                                    </TouchableOpacity>

                                ) : null

                            }



                        </View>

                        <View style={{ marginTop: 20, paddingBottom: 50 }}>

                            <View style={{ paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={[style.subtitle, { color: theme.txt }]}> Attractions </Text>
                                <TouchableOpacity>
                                    <Text style={[style.txt, { color: Colors.Seeall }]} onPress={() => navigation.navigate('Explore', { param: 'Attraction' })} >See All</Text>
                                </TouchableOpacity>
                            </View>

                            {

                                dataAttraction ? dataAttraction.map((item, index) =>

                                    <TouchableOpacity key={index} onPress={() => navigation.navigate('AttractionDetail')}>

                                        <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: theme.disable, marginTop: 5 }]}> {item.description.slice(0, 22)} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                    <Icons name='location' color={theme.disable} size={15} />
                                                    <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: theme.disable }]}>/Person</Text></Text>
                                            </View>
                                        </View>

                                    </TouchableOpacity>

                                ) : null

                            }

                        </View>

                    </ScrollView>
                }




            </View>


        </SafeAreaView>
    )
}