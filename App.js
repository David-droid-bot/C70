import React from "react";
import { Image,StyleSheet, Text, View } from "react-native";

import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import TransactionScreen from "./Screens/BookTransactionScreen";
import SearchScreen from "./Screens/SearchScreen";


export default class App extends React.Component {
  render(){
    return <AppContainer/>;
  }
}

const TabNavigator= createBottomTabNavigator({
  Search: {screen:SearchScreen },
  Transaction: {screen:TransactionScreen}
},

{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Transaction"){
        return(
          <Image
          source={
            require(
              "./assets/book.png"
              )
            }
          style={{
            width:40, 
            height:40
          }}
        />
        )
        
      }
      else if(routeName === "Search"){
        return(
          <Image
          source={
            require(
              "./assets/searchingbook.png"
              )
            }
          style={{
            width:40,
            height:40
          }}
        />)
        
      }
    }
  })
}
);

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
