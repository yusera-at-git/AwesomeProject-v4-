import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Cat1 extends Component{
   render( ){
    const name="pinky";
        return(
            <Text>
            Hello there {name}, welcome to {this.props.language}        </Text>


        );}
   
}