import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/About';
import Header from "../shared/Header";
import React from "react";


const screens = {
    About:{
        screen: About,
        navigationOptions:({ navigation }) =>{
            return{
                headerTitle: ()=> <Header navigation={navigation} title= 'About Game Zone' />,
            }
        }
    },
  
}

const AboutStack = createStackNavigator(screens, {
        defaultNavigationOptions:{
        headerTintColor: 'white',   
        headerStyle:{ backgroundColor: 'red'},

    }}
    
);

export default AboutStack;