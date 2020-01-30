import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Login/index'
import Dashboard from '../Dashboard/index'

const AppNavigator = createStackNavigator({
  Home: {
    login: Login,
    home: Dashboard
  },
});

export default createAppContainer(AppNavigator);