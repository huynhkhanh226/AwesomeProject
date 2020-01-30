import React, { Component } from 'react'
import { Text, View, Button, Alert } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';

export default class Login extends Component {
   
    render() {
        debugger;
        return (
            <View style={{ flex: 1}}>
                <Text> Login into the my application </Text>
               <TextInput
                    label='Email'
                    value={''}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('home')}
                />
            </View>
        )
    }
}
