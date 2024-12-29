import React, { useState, useContext } from 'react';
import { View, Text, Dimensions, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout } from "react-native-maps";
import { Icon } from 'react-native-paper';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Location2() {

    const navigation = useNavigation();
    const theme = useContext(themeContext);

    const initialRegion = {
        latitude: 34.020082,
        longitude: -6.841650,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const destinations = [
        {
            id: 1,
            latitude: 34.020882,
            longitude: -6.841750,
            title: 'Destination 1',
            description: 'Description 1',
            image: require('../../assets/image/agadir.jpg')
        },
        {
            id: 2,
            latitude: 34.021882,
            longitude: -6.842750,
            title: 'Destination 2',
            description: 'Description 2',
            image: require('../../assets/image/agadir.jpg')
        },
        {
            id: 3,
            latitude: 34.022882,
            longitude: -6.843750,
            title: 'Destination 3',
            description: 'Description 3',
            image: require('../../assets/image/agadir.jpg')
        },
    ];

    const [mapType, setMapType] = useState("standard");

    const handleMapTypeChange = (type) => {
        setMapType(type);
    };

    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={styles.mapTypeContainer}>

                <TouchableOpacity style={[styles.mapTypeButton, mapType === 'standard' && styles.activeMapType]} onPress={() => handleMapTypeChange("standard")}>
                    <Text style={styles.mapTypeButtonText}>Standard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.mapTypeButton, mapType === 'satellite' && styles.activeMapType]} onPress={() => handleMapTypeChange("satellite")}>
                    <Text style={styles.mapTypeButtonText}>Satellite</Text>
                </TouchableOpacity>

            </View>
            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={initialRegion}
                mapType={mapType}
            >
                {destinations.map(destination => (
                    <Marker
                        key={destination.id}
                        coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}
                        title={destination.title}
                        description={destination.description}
                    >
                        <View style={styles.customMarker}>
                            <Image
                                source={destination.image}
                                style={styles.markerImage}
                            />
                        </View>


                        <Callout>


                            <View style={styles.callout}>
                           
                                <Image source={require('../../assets/image/agadir.jpg')} resizeMode='cover' style={{ height: height / 8, width: width / 4 }} />

                                <View style={{ marginLeft: 10 }}>
                                    <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>San Francisco International Airport</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <Icon name='star' color={'#FFCD1A'} size={20}></Icon> */}
                                        <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                        <Text style={[style.subtxt, { color: theme.disable, }]}>(32)</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                        {/* <Icon name='location' color={theme.disable1} size={15} /> */}
                                        <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>San Francisco</Text>
                                    </View>
                                </View>

                            </View>

                        </Callout>


                    </Marker>
                ))}
            </MapView>
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

