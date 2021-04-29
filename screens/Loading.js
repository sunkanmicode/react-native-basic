import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export default function Loading () {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 24
    }
});