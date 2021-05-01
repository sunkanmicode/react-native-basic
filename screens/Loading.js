import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'

export default function Loading () {
    return (
        <View style={styles.container}>
            {/* <Text>Loading...</Text> */}
            <Image 
                source={require('../assets/200.gif')}
                style={styles.img}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 24,
    },
    img:{
        width: 300,
        height: 300,
    }
});