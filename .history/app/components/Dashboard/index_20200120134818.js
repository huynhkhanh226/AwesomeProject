import React, { Component } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import Styles from '../../../styles'

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }


    async getMoviesFromApi() {
        try {
            let response = await fetch(
                'https://facebook.github.io/react-native/movies.json'
            );
            debugger;
            let responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
                }, function(){

                });
        } catch (error) {
            console.error(error);
        }
    }

   componentDidMount(){
       this.getMoviesFromApi();
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
