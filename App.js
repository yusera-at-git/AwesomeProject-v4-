import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import Cafee from "./src/screens/Cafee";
import Cafe from "./src/screens/Cafe";
import FlatList1 from "./src/screens/Flatlist1";
import Buttons from "./src/screens/Buttons";
import TouchOpacity from "./src/screens/TouchOpacity";
import HomeScreen1 from "./src/screens/HomeScreen1";
const navigator= createStackNavigator(
    {
        Home:HomeScreen,
        Cafe1:Cafee,
        flatlist:FlatList1,
        But:Buttons,
        Touch: TouchOpacity,
        Home1: HomeScreen1
    },
    {
        initialRouteName:"Home1",
        defaultNavigationOptions:{
            title:"App"
           
        }
    }
);
 export default createAppContainer(navigator);