import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { globalStyle } from '../styles/Global';

export  default function About( { navigation }) {
    return (
        <View style={globalStyle.container}>
            <Text>About Page</Text>
        </View>
    )
}


