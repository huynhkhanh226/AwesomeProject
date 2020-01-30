import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';


class Child extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor");
    }

    render() {
        debugger;
        console.log("child", this.props.counter);
        return (
            <View>
                <Text style = {styles.text} >{this.props.counter}</Text>
            </View>
        )
    }
}

debugger;
const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(mapStateToProps, null)(Child);

const styles =StyleSheet.create({
    text: {
        fontSize: 100,
        color:'#000',
    }
});