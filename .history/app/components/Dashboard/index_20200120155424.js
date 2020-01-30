import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import Styles from '../../../styles';
const axios = require('axios');

import * as actions from '../../actions';
import {connect} from 'react-redux';

class Dashboard extends Component {
  handleIncrease = () => {
    this.props.counterIncrease();
  };

  handleDecrease = () => {
    this.props.counterDecrease();
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
            <View style={{
                flex: 1,
                width: '100%',
                justifyContent: 'center'
            }}
            >
                <View style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Child/>
                </View>
                <View style = {{flex:1}}>
                    <ButtonComp
                        title="Increase"
                        textColor="#000"
                        bgColor="#397af8"
                        onPress={this.handleIncrease}/>
                    <ButtonComp
                        title="Decrease"
                        bgColor="orange"
                        onPress={this.handleDecrease}/>
                </View>

            </View>
        )
  }
}


export default connect(null, actions)(Dashboard);
