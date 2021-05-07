import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Catt=(props)=>{
  return <Text>{props.food[0]} {props.food[1]}</Text>
}
const HomeScreen=()=>{

return (<View  style={styles.container}>
  <Text> what </Text>
  <Catt food={["fish", "kibble"]} age={2} />

</View>
);
};

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
