import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import AppNavigator from './app/components/AppNavigator/index';
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
 render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

