import React from "react";
import {Text, Button, View, StyleSheet, TouchableOpacity} from "react-native";

const TouchOpacity=()=>{
    return(
        <View>
            <Text>
                <Button 
                onPress={()=>{window.alert("hello world");}}
                title="press to see the alert"
                />
            </Text>
            <TouchOpacity>
                press the button
            </TouchOpacity>
        </View>
    );
}

export default TouchOpacity;