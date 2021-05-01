import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyle, images } from '../styles/Global';
import Card from '../shared/Card'

export default function ReviewDetails({ navigation }) {
    const rating = navigation.getParam('rating')
    return (
        <View style={globalStyle.container}>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                {/* <Text>{navigation.getParam('rating')}</Text> */}
                <View style={styles.rating}>
                <Text> Game Zone rating:</Text>
                    <Image 
                        source={images.ratings[rating]}
                
                    />
                </View>
            </Card>
        </View>
    )
}

const styles= StyleSheet.create({
    rating:{

    }
})


