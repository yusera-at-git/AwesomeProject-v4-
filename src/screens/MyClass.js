import React, { Component} from "react";
import { Text, View, StyleSheet} from 'react-native';

const getFullNAme=(firstname, secondName, thirdName)=>{
    return firstname + " "+secondName+" "+thirdName;
}

export default class MyClass extends Component{
    render(){
        return(
            <Text> { getFullNAme("yusera", "zakir", "Ansar")}</Text>
        );
    }
}