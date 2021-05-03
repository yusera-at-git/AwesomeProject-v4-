import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cat1 from './src/screens/Cat1';

 const getFullIdea=(myidea,yourIdea)=>{
    return myidea+ " "+ yourIdea; a
}
export default class Cat extends Component{
   render(){
    const name="pinky";
    const getTheCat=(fish, milk, noodles)=>{
        return <Text> { fish} {milk} </Text>;}
   
        return(
            <View>
                <Cat1 />
                <Cat1 language='html'/>
            Hello there {name}
            {getFullIdea('kjdhid', "hhddsjfj")  } {getTheCat("yess","no","never")}
            hjjkghjk
            
            </View>
            

        );
        
     
        }
   
}