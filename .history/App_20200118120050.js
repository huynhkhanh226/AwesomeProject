import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from 'react-navigation'
import AppNavigator from './app/components/AppNavigator/index'
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}



