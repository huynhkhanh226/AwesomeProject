import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './app/components/AppNavigator/index';
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator);


export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <AppContainer />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
