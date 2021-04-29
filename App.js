import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import Loading from './screens/Loading'
// import Home from './screens/Home';
import { useFonts } from 'expo-font';
import Navigator from './routes/Drawer'


export default function App() {
  const [loaded] = useFonts({
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic.ttf')
  });

  if(loaded){
      return(
          <Navigator  />
      )
    }

    return (
    <Loading />
    );
}



