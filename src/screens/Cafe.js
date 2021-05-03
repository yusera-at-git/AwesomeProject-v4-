import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from "react-native";

class HungryCats extends Component{
    constructor(props){
        super(props);
        this.state={isHungry: true};

    };

    
    render(){
        return(
            <View>
                <Text>
                    I am {this.props.name}.I am {this.state.isHungry?"Hungry":"full"}!
                    </Text>
                    <Button onPress={
                        ()=>{this.state.isHungry?this.setState({isHungry:false}):this.setState({isHungry:true}) }
                    }

                    title={
                        this.state.isHungry?"Pour me some milk": "Thankyou"}

                    
                    /> </View>
            



        );
    }
}
class Cafe extends Component{
    render(){
        return(
            <>
            <HungryCats name="yusera"/>
            <HungryCats name="sumedha"/>
            </>
        );
    }
}
 export default Cafe;
