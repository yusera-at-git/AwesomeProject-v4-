import React from 'react';
import {Text, View, StyleSheet, Button} from "react-native";

const Buttons=()=>{
    return(
<View  style={style.labels}>
    <Text style={[style.textstyle,{backgroundColor:"grey"}]}>
what happennnnd?</Text>

<Button onPress={()=> console.log("pressed")
}
    title="click here to test navigation"/>

<Button title="click here and navigate"/>
<Text>hello
    </Text>
</View>

    );
}

const style=StyleSheet.create(
    {
        textstyle:{
            fontSize:30,
            color:'blue'
        },
       labels: {
           marginVertical:50,
           padding:50

        }

    }
);
 export default Buttons;