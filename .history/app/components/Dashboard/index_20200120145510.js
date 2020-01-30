import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Styles from '../../../styles';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true
        };
  }

getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
        return responseJson.movies;
        })
        .catch((error) => {
        console.error(error);
        });
    }

  async getMoviesFromApi() {
    try {
        let response = await fetch(
        'https://facebook.github.io/react-native/movies.json',
        );
        let responseJson = await response.json();
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });
       // return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}

  componentDidMount() {
    this.setState({
          isLoading: false,
          dataSource: this.getMoviesFromApiAsync(),
        }, function(){

  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <Text>
              {item.title}, {item.releaseYear}
            </Text>
          )}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}
