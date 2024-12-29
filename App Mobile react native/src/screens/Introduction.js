import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList
} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import IntroItem from './IntroItem'
import Slides from './Slides'
import { Avatar } from 'react-native-paper'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Introduction() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const ref = React.useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        
        return <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: theme.bg, justifyContent: 'space-between', }}>

            <View style={{ flexDirection: 'row', paddingHorizontal: 18, backgroundColor: theme.bg, marginBottom: 20 }}>
                {currentSlideIndex == 0 ?
                    (
                        <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={goNextSlide}>
                                <Avatar.Icon icon="chevron-right"
                                    size={50}
                                    style={{ backgroundColor: Colors.primary, }}
                                    color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={{ marginLeft: 10 }} >
                                <Text style={[style.txt, { color: Colors.intxt }]}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    ) : currentSlideIndex == 1 ? (
                        <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={goNextSlide} >
                                <Avatar.Icon icon="chevron-right"
                                    size={50}
                                    style={{ backgroundColor: Colors.primary, }}
                                    color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={{ marginLeft: 10 }}>
                                <Text style={[style.txt, { color: Colors.intxt }]}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={{ paddingTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} >
                                <Avatar.Icon icon="chevron-right"
                                    size={50}
                                    style={{ backgroundColor: Colors.primary, }}
                                    color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Onboarding')} style={{ marginLeft: 10 }}>
                                <Text style={[style.txt, { color: Colors.intxt }]}>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: theme.background, marginBottom: 20, marginHorizontal: 20 }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                            backgroundColor: Colors.primary,
                            alignItems: 'center',
                            marginHorizontal: 5
                        },]}
                    />

                ))}

            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />
        </SafeAreaView>
    )
}