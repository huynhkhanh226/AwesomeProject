import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from '../Login'
import Dashboard from '../Dashboard'

const AppNavigator = createStackNavigator({
    login: Login,
    home: Dashboard
},
  {
    initialRouteName: 'login',
  });

export default AppNavigator