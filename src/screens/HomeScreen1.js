import React, {Component} from "react";
import {Text, View, StyleSheet,Button} from "react-native";
const NAME="yusera";
const HomeScreen1=()=>{
    return(
<View>
    <Text>
    Hello, I am {NAME} 
    
    </Text>
</View>
    );
}
class Home extends Component{
    render(){
        return(
            <View> Help me {NAME}</View>
        );
    }
}

/*const style=StyleSheet.create(

);
*/
export default HomeScreen1;