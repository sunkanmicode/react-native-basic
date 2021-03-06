import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails'
import Header from "../shared/Header";
import React from "react";


const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({ navigation }) =>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title= 'Home Game Zone'/>,
            }
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title: 'Review Details'
        }
    }
}
const HomeStack = createStackNavigator(screens, {
        defaultNavigationOptions:{
        headerTintColor: 'white',   
        headerStyle:{ backgroundColor: 'lightblue'},

    }}
    
);

export default HomeStack;