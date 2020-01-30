import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';

export default class Login extends Component {
   
    render() {
        return (
            <View style={{ flex: 1}}>
                <Text> Login into the my application </Text>
               <TextInput style={{height: 24}}
                    label='Email'
                    value={'this.state.text'}
                />
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('home')}
                />
            </View>
        )
    }
}
