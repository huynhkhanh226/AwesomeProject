import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createStackNavigator} from 'react-navigation'
import Login from './app/components/Login'
import Dashboard from './app/components/Dashboard'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}




