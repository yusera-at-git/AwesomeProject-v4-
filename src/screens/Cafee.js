import React,{useState} from "react";
import { Button, Text, View} from "react-native";
const Cattt=(props)=>{
    const[isHungry, setIsHungry]=
    useState(true);
    
    return(
    <View><Text>
        I am {props.name} and i am { isHungry?"hungry": "full"}
        </Text>
        <Button onPress={()=>{setIsHungry(false);}}
        disabled={!isHungry}
        title={isHungry?"pour me some milk":"thank you"}/>
        </View>
        );
    }
    const Cafee=()=>{
        return(
            <view>
            <Cattt name="yusera"/>
            <Cattt name="sumedha"/>
           
            
            </view>
        );
    }
    export default Cafee;