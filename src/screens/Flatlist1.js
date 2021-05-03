import React from "react";
import {Text, FlatList,View, StyleSheet} from "react-native";

const friends=[ 
    { name: 'hello', key:"1"},
    { name: 'hel5lo', key:"2"},
    { name: 'hel2lo' ,key:"5"},
    { name: 'hell2o', key:"6"},
    { name: 'hel1lo',key:"66"},
    { name: 'hel555lo', key:"5"}
    
]
const foes=[
    {name:'whatever'},
    { name: 'hello'},
    { name: 'helloff'},
    { name: 'hellocc'},
    { name: 'hellxco'},
    { name: 'hellhjdko'}
]

const FlatList1 =()=>{

    return(
        <View>
        <FlatList 
        horizontal={false}
        
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}

        data={friends}
        renderItem={({item})=>{
            return <Text style={[style.container,style.textStyle]}>{item.name}{item.key}</Text>
        }}
        />
        <FlatList
        keyExtractor={(foe)=>foe.name}
        data={foes}
        renderItem={({item})=>{
            return <Text style={style.textStyle}> {item.name}</Text>
        }}
         />
        </View>
    );
}

const style=StyleSheet.create({
    container:{
        fontSize:30,
        backgroundColor:"green"
    },
    textStyle:{
        marginVertical:50,

    }

}
);
 export default FlatList1;