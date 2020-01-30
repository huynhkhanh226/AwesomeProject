import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from '../../../Styles'

export default class Login extends Component {
    render() {
        return (
            <View>
                <Text> Login into the application </Text>
                <TextInput />
            </View>
        )
    }
}
