import {
  View, Text,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  StatusBar
} from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Splash() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>

      <StatusBar backgroundColor="transparent" translucent={true} />

      <View style={{ flex: 2.5, justifyContent: 'center', alignItems: 'center' }}>

        <Text style={[style.title1, { color: Colors.secondary, fontSize: 45 }]}>Dream Travel</Text>

        <Text style={[style.txt, { color: Colors.secondary, }]}>Explore the world</Text>

      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <ActivityIndicator size={50} color={Colors.secondary} />

      </View>

    </SafeAreaView>
  )
}