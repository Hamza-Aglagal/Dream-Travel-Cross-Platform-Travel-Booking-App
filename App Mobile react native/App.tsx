import { View, Text } from 'react-native'
import React from 'react'
import StackNavigator from './src/navigator/StackNavigator'
import { Provider } from 'react-redux'
import store from './src/redux/Store'
import { AlertNotificationRoot } from 'react-native-alert-notification'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

// Icon.loadFont()
// Icons.loadFont()

export default function App() {
  return (
    <Provider store={store}>
      <AlertNotificationRoot>

        <StackNavigator />
        
      </AlertNotificationRoot>
    </Provider>
  );
}