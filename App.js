import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/app/components/AppNavigator';
import 'react-native-gesture-handler';
const AppContainer = createAppContainer(AppNavigator);
import configureStore from './src/app/store';
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
