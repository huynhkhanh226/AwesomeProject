import React, {Component} from 'react';
import {Text, View, FlatList, ActivityIndicator, StyleSheet} from 'react-native';
import Styles from '../../../styles';
const axios = require('axios');

import * as actions from '../../actions';
import {connect} from 'react-redux';

class Dashboard extends Component {
  render() {
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
                        textColor="#fff"
                        bgColor="#397af8"
                        onPress={() =>{}}/>
                    <ButtonComp
                        title="Decrease"
                        bgColor="orange"
                        onPress={() =>{}}/>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'red'
    },
    btnStyle: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "red",
        backgroundColor: "#15c"
    },
});

export default connect(null, actions)(Dashboard);
