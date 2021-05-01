import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    FlatList, 
    TouchableOpacity, 
    Modal,
    TouchableWithoutFeedback,
    Keyboard

} from 'react-native';
import { globalStyle } from '../styles/Global';
import ReviewForm from "../screens/ReviewForm";
import Card from '../shared/Card';
import { MaterialIcons } from "@expo/vector-icons";
import data from '../Data'


export default function Home ({ navigation }) {
    const [modalOpen, setModalOpen ] = useState(false)
    const [reviews, setReviews ] = useState(data);

    const addReview = (review)=>{
        review.key = Math.random().toString();
        setReviews((currentReview) =>{
            return[review, ...currentReview]
        });
        setModalOpen(false)
    }
    
    return (
        
        <View style={globalStyle.container}>
           

            <Modal visible={modalOpen} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={StyleSheet.modelContent}>
                <MaterialIcons 
                name="close"
                size = {28}
                style={{...styles.modalToggle, ...styles.modalClose}}
                onPress={()=>setModalOpen(false)}
            />
                    <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
                name="add"
                size = {28}
                style={styles.modalToggle}
                onPress={()=>setModalOpen(true)}
            />
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

const styles = StyleSheet.create({
    modelContent:{
        flex: 1,
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0
    }
})


