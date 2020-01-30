import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper';

export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 15, paddingRight: 15 }}>
                <Text> Login into the my application </Text>
               
                <HelperText
                    type="error"
                    visible={!this.state.text.includes('@')}
                    >
                    Email address is invalid!
                </HelperText>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('home')}
                />
            </View>
        )
    }
}
