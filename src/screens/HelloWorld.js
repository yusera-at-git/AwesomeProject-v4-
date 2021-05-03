import React, { Component} from 'react';
import {Text, View,StyleSheet} from 'react-native ';

export default class HelloWorld extends Component{
  render(){
    return(
      <Text style={[{color:'green'}, mystyle.container, mystyle.anothercontainer ]}>
        This is the text to be displayed
      </Text>

    );
  }
}

const mystyle=StyleSheet.create(
{
  container: {
    backgroundcolor: "black",
    flex: 1
  },
  anothercontainer: {
    alignItems: 'center',
    justifyContent: "center"
  }
}
);