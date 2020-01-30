import React, { Component } from "react";
import {Linking,Platform,TouchableOpacity,Text} from "react-native";
export default class MakeCall extends Component {

 dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

 Render(){
        return(
                <TouchableOpacity
                   style={{
                   height: 30,
                   width: 30,
                   backgroundColor: "#329df4",
                   alignItems: "center",
                   justifyContent: "center",
                   borderRadius: 5
                   }}
                 onPress={()=>{this.dialCall(123456789)}}
                >
                <Text>Phone</Text>
                </TouchableOpacity>
              )
  }

}