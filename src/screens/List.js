import React from "react";
import { View, Text, StyleSheet, FlatList} from "react-native";

const List=()=>{
    const friends=[
        {name:"friend 1", key:"1"},
        {name:"friend 2", key:"2"},
        {name:"friend 3", key:"3"},
        {name:"friend 4", key:"4"},
        {name:"friend 5", key:"5"},
        {name:"friend 6", key:"6"},
        {name:"friend 7", key:"7"},
        {name:"friend 8", key: "8"}
    ];
     return(
         <View>
         <Text>
            This is a FlatList
         </Text>
         <FlatList 
         data={friends} 
         renderItem={({item})=>{
             return <Text>{item.name}</Text>;
         }}/>

         
         </View>
     )

}

const List2=()=>{

    const foes=[
        {name:"enemy1"},
        {name:"enemy2"},
        {name:"enemy3"},
        {name:"enemy4"},
        {name:"enemy5"},
        {name:"enemy6"},
    ]
    return(
        <View>
            <Text>This is another FlatList</Text>
            <FlatList 
            data={foes} 
            renderItem={
                ({item})=>{
                    return <Text>{item.name}</Text>;
                }}
                />

           
        </View>

    );
}
export default List2;