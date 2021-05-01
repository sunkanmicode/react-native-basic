import { StyleSheet } from 'react-native';

export const globalStyle = StyleSheet.create({
        container:{
            padding: 24,
        },
        text:{
            fontFamily: 'Montserrat-Bold',
            fontSize: 18,
            color: 'red',
        }, 
        paragraph:{
            marginVertical: 8,
            lineHeight: 20,
        },
        input:{
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            fontSize: 18,
            borderRadius: 6,
        }
});

export const images = {
    ratings:{
        '5': require('../assets/rating3.png'),
        '2': require('../assets/rating2.png'),
        '3': require('../assets/rating.png'),
        '4': require('../assets/rating2.png')


    }
}