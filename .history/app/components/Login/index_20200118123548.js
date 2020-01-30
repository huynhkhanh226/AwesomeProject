import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'


export default class Login extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 15, paddingRight: 15 }}>
                <Text> Login into the my application </Text>
                <TextInput
                    style={{height: 40, border: '1px'}}
                    placeholder="Type here to translate!"
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
