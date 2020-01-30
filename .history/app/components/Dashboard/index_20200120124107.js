import React, { Component } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import Styles from '../../../styles'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }


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

   componentDidMount(){
       getMoviesFromApi();
  }

    render() {
         if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

       return(
        <View style={{flex: 1, paddingTop:20}}>
            <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
            keyExtractor={({id}, index) => id}
            />
        </View>
        );
    }
}
