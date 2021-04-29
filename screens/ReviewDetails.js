import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { globalStyle } from '../styles/Global';
import Card from '../shared/Card'

export default function ReviewDetails({ navigation }) {
    return (
        <View style={globalStyle.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <Text>{navigation.getParam('rating')}</Text>
            </Card>
        </View>
    )
}


