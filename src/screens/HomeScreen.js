import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const Catt=(props)=>{
  return <Text>{props.food}</Text>
}
const HomeScreen=()=>{
return <View  style={styles.container}>
  <Text>what 
</Text>
</View>
};
<Catt food={["fish", "kibble"]} age={2} />

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default HomeScreen;
