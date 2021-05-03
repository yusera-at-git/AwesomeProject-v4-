import React from "react";
import { render } from "react-dom";
import { View, StyleSheet, Text} from 'react-native';

const HeyThere=()=>{
return(
    <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'blue',fontSize:100}}>
      <Text> This is a component</Text>
    </View>
      );
}

const mystyle= StyleSheet.create(
    { container: {
        fontSize:80
    },
    container2:{
        fontSize:70
    }

    }
 );
export default HeyThere;
