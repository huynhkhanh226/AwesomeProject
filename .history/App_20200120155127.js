import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Provider} from 'react-redux';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './app/components/AppNavigator/index'
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator);
import store from './app/store';


export default class App extends Component {
  render() {
    return (
            <Provider store = {store}>
              <View style={styles.container}>
                  <AppContainer/>
              </View>
            </Provider>
        );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});



