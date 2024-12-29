import React, { useContext } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Dimensions,
    TouchableOpacity,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    TextInput
} from 'react-native';
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from 'react-native-image-slider-box';
import DetailDestinationHook from '../Hook/Detail-destination-hook';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import MapView from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient'





const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function DestinationDetail() {
    const [
        DestinationById, id, mapType, initialRegion,
        setComment, Comment,

    ] = DetailDestinationHook();

    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const defaultImages = [
        require('../../assets/image/beach.png'),
        require('../../assets/image/beach.png'),
        require('../../assets/image/beach.png')
    ];

    const images = DestinationById && DestinationById.destination && DestinationById.destination.images && DestinationById.destination.images.length > 0
        ? DestinationById.destination.images
        : defaultImages;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} />

            <View>
                <View style={{ width: width, height: height / 2.8 }}>
                    <AppBar
                        style={{
                            width: width,
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            marginTop: 35,
                            marginHorizontal: 20,
                            justifyContent: 'center',
                            position: 'absolute'
                        }}
                        title="Destination Details"
                        titleStyle={{ fontFamily: 'PlusJakartaSans-Bold' }}
                        centerTitle={true}
                        elevation={0}
                        leading={
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Avatar.Icon
                                    icon="arrow-left"
                                    style={{ backgroundColor: 'transparent' }}
                                    color={Colors.secondary}
                                    size={45}
                                />
                            </TouchableOpacity>
                        }
                    />

                    <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        dotColor="#009B8D"
                        inactiveDotColor="#FFFFFF"
                        dotStyle={{
                            width: 15,
                            height: 15,
                            borderRadius: 15,
                            marginHorizontal: 3,
                            padding: 0,
                            margin: 0,
                            marginBottom: 29
                        }}
                        style={{ height: height / 2.8 }}
                    />
                </View>
            </View>

            <View style={[style.main, { backgroundColor: theme.bg, marginTop: -30, borderTopLeftRadius: 40, borderTopRightRadius: 40, marginHorizontal: -5 }]}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={[style.subtitle, { color: theme.txt }]}>
                                {DestinationById?.destination?.nom}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='location' color={theme.disable} size={18} />
                                <Text style={[style.subtxt, { color: theme.disable1, fontSize: 12, marginHorizontal: 5 }]}>
                                    {DestinationById?.destination?.localisation?.rue}, {DestinationById?.destination?.localisation?.ville}
                                </Text>
                                <Icon name='star' color={'#FFCD1A'} size={16} />
                                <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 12, marginHorizontal: 5 }]}>
                                    {DestinationById?.rating} rating
                                </Text>
                                <Text style={[style.subtxt, { color: theme.disable, fontSize: 12 }]}>
                                    ({DestinationById?.avis ? DestinationById.avis.length : 0} Reviews)
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableOpacity>
                                <View style={{
                                    height: 35,
                                    width: 35,
                                    backgroundColor: '#C5FFF5',
                                    borderRadius: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 10,
                                    marginRight: 10
                                }}>
                                    <Icon name={'heart'} size={28} color={'#E53935'} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20 }]}>Details</Text>
                    {DestinationById?.destination?.description && (
                        <Text style={[style.subtxt, { color: theme.txt }]}>
                            {DestinationById.destination.description}
                        </Text>
                    )}

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, justifyContent: 'space-between' }}>
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Review</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Review', { id: id })}>
                            <Text style={[style.subtxt, { color: Colors.nbMessage }]}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    {DestinationById?.avis && DestinationById.avis.length > 0 && (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image
                                source={require('../../assets/image/Jhone.png')}
                                resizeMode='stretch'
                                style={{ height: height / 18, width: width / 8.5 }}
                            />
                            <View style={{ marginHorizontal: 10, flex: 1 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>
                                        {DestinationById.avis[0]?.id_user ? (
                                            DestinationById.avis[0].id_user.nom && DestinationById.avis[0].id_user.prenom ?
                                                `${DestinationById.avis[0].id_user.nom} ${DestinationById.avis[0].id_user.prenom}` :
                                                'No User'
                                        ) : 'No User'}
                                    </Text>
                                    <Text style={[style.subtxt, { color: theme.disable }]}>
                                        {DestinationById.avis[0]?.date || 'Date not available'}
                                    </Text>
                                </View>
                                <Text style={[style.subtxt, { fontSize: 12 }]}>
                                    {DestinationById.avis[0]?.rating ?
                                        `⭐${'⭐'.repeat(parseInt(DestinationById.avis[0].rating) - 1)}` :
                                        'Rating not available'
                                    }
                                </Text>
                            </View>
                        </View>
                    )}

                    <Text style={[style.subtxt, { color: theme.txt, marginTop: 5, lineHeight: 18, marginLeft: 55 }]}>
                        {DestinationById?.avis && DestinationById.avis[0]?.commentaire ? DestinationById.avis[0].commentaire : 'No comment'}
                    </Text>

                    <View style={[style.inputContainer, { backgroundColor: '#dbd8e3', justifyContent: 'space-between', borderRadius: 25 }]}>

                        <TextInput placeholder=" comment ... "
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.disable}
                            value={Comment}
                            onChangeText={setComment}

                        />

                        <TouchableOpacity onPress={() => Message && sendMessage()}>
                            <Avatar.Icon icon='near-me' color={Colors.secondary} size={40} style={{ backgroundColor: Comment ? Colors.nbMessage : Colors.primary }} />
                        </TouchableOpacity>

                    </View>


                    <View style={{ marginTop: 20 }}>

                        {/* <Image
                            source={require('../../assets/image/Location.png')}
                            resizeMode='stretch'
                            style={{ height: height / 3.5, width: width - 40, marginVertical: 10 }}
                        /> */}
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20, fontWeight: 'bold' }]}> Location </Text>

                        <MapView
                            style={{ height: height / 3.5, width: width - 40, marginVertical: 10 }}
                            initialRegion={initialRegion}
                            mapType={mapType}
                        >
                        </MapView>


                    </View>




                    <View style={{ marginBottom: 15 }}>

                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20, fontWeight: 'bold' }]}> Transports </Text>


                        <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false} >




                            {

                                DestinationById ? DestinationById.transports && DestinationById.transports.map((item, index) =>

                                    <TouchableOpacity
                                        style={{ width: width / 1.4, marginRight: 30 }}
                                        key={index}
                                        onPress={() => navigation.navigate('HotelDetail')}
                                    >
                                        <LinearGradient
                                            colors={['#2193b0', '#6dd5ed']}
                                            style={{
                                                borderRadius: 10,
                                                paddingVertical: 20,
                                                paddingHorizontal: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                source={require('../../assets/image/beach2.png')}
                                                resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: Colors.white, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: Colors.white, marginTop: 15 }]}> {item.type} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                                    <Icons name='location' color={Colors.white} size={15} />
                                                    <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: Colors.white, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: Colors.white }]}>/Person</Text></Text>
                                            </View>
                                        </LinearGradient>
                                    </TouchableOpacity>

                                ) : null

                            }




                        </ScrollView>

                    </View>



                    <View style={{ marginBottom: 15 }}>

                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20, fontWeight: 'bold' }]}> Evenements </Text>


                        <ScrollView  nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>




                            {

                                DestinationById ? DestinationById.evenements && DestinationById.evenements.map((item, index) =>

                                    <TouchableOpacity style={{ marginRight: 20}} key={index} onPress={() => navigation.navigate('HotelDetail')}>

                                        <LinearGradient
                                            colors={['#42275a', '#734b6d']}
                                            style={{
                                                borderRadius: 10,
                                                paddingVertical: 20,
                                                paddingHorizontal: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >

                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: Colors.white, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: Colors.white, marginTop: 15 }]}> {item.type} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                                    <Icons name='location' color={Colors.white} size={15} />
                                                    <Text style={[style.subtxt, { color: Colors.white, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>



                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: Colors.white, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: Colors.white }]}>/Person</Text></Text>
                                            </View>



                                        </LinearGradient>

                                    </TouchableOpacity>

                                ) : null

                            }




                        </ScrollView>

                    </View>



                    <View style={{ marginBottom: 15 }}>

                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20, fontWeight: 'bold' }]}> Hebergement </Text>


                        <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>




                            {

                                DestinationById ? DestinationById.hebergements && DestinationById.hebergements.map((item, index) =>

                                    <TouchableOpacity style={{ marginRight: 20}} key={index} onPress={() => navigation.navigate('HotelDetail')}>

                                        <LinearGradient
                                            colors={['#de6262', '#ffb88c']}
                                            style={{
                                                borderRadius: 10,
                                                paddingVertical: 20,
                                                paddingHorizontal: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >

                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: Colors.white, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: Colors.white, marginTop: 15 }]}> {item.type} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                                    <Icons name='location' color={Colors.white} size={15} />
                                                    <Text style={[style.subtxt, { color: Colors.white, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>



                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: Colors.white, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: Colors.white }]}>/Person</Text></Text>
                                            </View>



                                        </LinearGradient>

                                    </TouchableOpacity>

                                ) : null

                            }




                        </ScrollView>

                    </View>



                    <View style={{ marginBottom: 15 }}>

                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20, fontWeight: 'bold' }]}> Restaurations </Text>


                        <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>




                            {

                                DestinationById ? DestinationById.restaurations && DestinationById.restaurations.map((item, index) =>

                                    <TouchableOpacity  style={{ marginRight: 20}} key={index} onPress={() => navigation.navigate('HotelDetail')}>

                                        <LinearGradient
                                            colors={['#02aab0', '#00cdac']}
                                            style={{
                                                borderRadius: 10,
                                                paddingVertical: 20,
                                                paddingHorizontal: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >

                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: Colors.white, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color: Colors.white, marginTop: 15 }]}> {item.type} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                                    <Icons name='location' color={Colors.white} size={15} />
                                                    <Text style={[style.subtxt, { color: Colors.white, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>



                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: Colors.white, fontFamily: 'PlusJakartaSans-Bold' }]}> A partir / {item.prix} DH <Text style={[style.subtxt, { color: Colors.white }]}></Text></Text>
                                            </View>

                                        </LinearGradient>

                                    </TouchableOpacity>

                                ) : null

                            }




                        </ScrollView>

                    </View>




                    <View style={{ marginBottom: 15 }}>

                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginVertical: 10, marginTop: 20, fontWeight: 'bold' }]}> Evenements </Text>


                        <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>




                            {

                                DestinationById ? DestinationById.evenements && DestinationById.evenements.map((item, index) =>

                                    <TouchableOpacity style={{ marginRight: 20}} key={index} onPress={() => navigation.navigate('HotelDetail')}>

                                        <LinearGradient
                                            colors={['#aa076b', '#61045f']}
                                            style={{
                                                borderRadius: 10,
                                                paddingVertical: 20,
                                                paddingHorizontal: 10,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 4 }}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={[style.subtitle, { color: Colors.white, fontSize: 18 }]}> {item.name} </Text>
                                                <Text style={[style.subtxt, { color:Colors.white, marginTop: 15 }]}> {item.type} </Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                                                    <Icons name='location' color={Colors.white} size={15} />
                                                    <Text style={[style.subtxt, { color: Colors.white, marginLeft: 5 }]}>{item.id_destination.nom}</Text>
                                                </View>



                                            </View>
                                            <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                                                <Text style={[style.subtxt, { color: Colors.white, fontFamily: 'PlusJakartaSans-Bold' }]}>{item.prix} DH <Text style={[style.subtxt, { color: Colors.white }]}>/Person</Text></Text>
                                            </View>



                                        </LinearGradient>
                                    </TouchableOpacity>

                                ) : null

                            }




                        </ScrollView>

                    </View>


                </ScrollView>
            </View>

            <View style={{ backgroundColor: theme.bg, paddingVertical: 20, paddingHorizontal: 20, borderTopRightRadius: 20, borderTopLeftRadius: 20, borderColor: Colors.border, borderWidth: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.title, { color: Colors.primary }]}></Text>
                        <Text style={[style.subtxt, { color: Colors.disable, marginRight: 10 }]}></Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={[style.btn, { flex: 1 }]}>
                        <Text style={[style.btntxt]}>Ajouter Activité</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}




const styles = StyleSheet.create({
    mapTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1111

    },
    mapTypeButton: {
        paddingHorizontal: 50,
        paddingVertical: 5,
        borderRadius: 5,
    },
    mapTypeButtonText: {
        fontSize: 16,
    },
    activeMapType: {
        backgroundColor: 'gray',
    },
    customMarker: {
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 3,
    },
    markerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    callout: {
        width: 200,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
    },
});

