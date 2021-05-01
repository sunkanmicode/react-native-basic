import React from "react";
import { StyleStyles, Button, TextInput, View, Text } from "react-native";
import { globalStyle } from "../styles/Global";
import { Formik } from "formik";

export default function ReviewForm({ addReview}){
    return(
        <View style={globalStyle.container}>
            <Formik 
                initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values, actions)=>{
                    actions.resetForm();
                    addReview(values)
                    // console.log(values)
                }}
            >
                {(props)=> (
                    <View>
                        <TextInput
                            style={globalStyle.input}
                            placeholder= 'Review title'
                            onChangeText ={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyle.input}
                            placeholder= 'Review body'
                            onChangeText ={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput
                            keyboardType='numeric'
                            style={globalStyle.input}
                            placeholder= 'Rating (3-5)'
                            onChangeText ={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Button 
                            title='submit' 
                            color= 'red' 
                            onPress ={props.handleSubmit}
                        /> 
                    </View>
                )}
            </Formik>
        </View>
    )
}