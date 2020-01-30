import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Styles from '../../../styles';
import Child from './Child';
import ButtonComp from './Button';
import MakeCall from './MakeCall';

import * as actions from '../../_actions';
import {connect} from 'react-redux';
import MyLibrary from './ToastExample';

class Dashboard extends Component {
  handleIncrease = () => {
    this.props.counterIncrease();
  };

  handleDecrease = () => {
    this.props.counterDecrease();
  };

  toast = () => {
   console.log(MyLibrary);
    //MyLibrary.show('Awesome', 1000);
  };

  render() {
    debugger;
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Child />
        </View>
        <View style={{flex: 1}}>
          <ButtonComp
            title="Increase"
            textColor="#000"
            bgColor="#397af8"
            onPress={this.handleIncrease}
          />
          <ButtonComp
            title="Decrease"
            bgColor="orange"
            onPress={this.handleDecrease}
          />

          <MakeCall />

          <ButtonComp
            title="Toast"
            bgColor="orange"
            onPress={()=>this.toast()}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(Dashboard);

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  btnStyle: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: '#15c',
  },
});
