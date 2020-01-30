import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Styles from '../../../styles';
const axios = require('axios');

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }

    async loaData = () => {
        try {
            const response = await axios.get('https://facebook.github.io/react-native/movies.json');
            console.log(response);
                this.setState({
                isLoading: false,
                dataSource: response.data.movies,
            }
            );
        } catch (error) {
            console.error(error);
        }
    }

  componentDidMount() {
    
    this.loaData();
    // return fetch('https://facebook.github.io/react-native/movies.json')
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson);
    //     this.setState(
    //       {
    //         isLoading: false,
    //         dataSource: responseJson.movies,
    //       },
    //       function() {},
    //     );
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
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
