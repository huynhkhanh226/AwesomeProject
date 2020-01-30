import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Styles from '../../../styles';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
        dataSource: []
        };
  }

    function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
        return responseJson.movies;
        })
        .catch((error) => {
        console.error(error);
        });
    }

  componentDidMount() {
      let data = this.getMoviesFromApiAsync();
    this.setState({
          isLoading: false,
          dataSource: data,
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
