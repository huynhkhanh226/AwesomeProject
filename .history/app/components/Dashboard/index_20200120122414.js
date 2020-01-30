import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from '../../../styles'

export default class Dashboard extends Component {
    

componentDidMount(){
    async function getMoviesFromApi() {
        try {
            let response = await fetch(
            'https://facebook.github.io/react-native/movies.json',
            );
            let responseJson = await response.json();
            return responseJson.movies;
        } catch (error) {
            console.error(error);
        }
    }
}

    render() {

        return (
            <View style={Styles.container}>
                <Text> Hello Dashboard </Text>
            </View>
        )
    }
}
