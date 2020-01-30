import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from '../../../styles'

export default class Dashboard extends Component {
    

componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
}

    render() {
        
        return (
            <View style={Styles.container}>
                <Text> Hello Dashboard </Text>
            </View>
        )
    }
}
