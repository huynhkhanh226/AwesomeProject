import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'


export default class Login extends Component {
    render() {
        return (
            <View>
                <Text> Login into the application </Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        )
    }
}
