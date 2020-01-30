import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Styles from '../../../styles'

export default class Dashboard extends Component {
    constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

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
