import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyle } from '../styles/Global';
import Card from '../shared/Card'
import data from '../Data'


export default function Home ({ navigation }) {
    const [reviews, setReviews ] = useState(data);
    
    return (
        <View style={globalStyle.container}>
            <FlatList 
            data={reviews}
            renderItem = {({ item })=>(
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyle.text}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
            
        </View>
    )
}


