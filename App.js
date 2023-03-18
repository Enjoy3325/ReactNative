
import { StatusBar } from 'expo-status-bar';
import { RegistrationScreens } from './Screens/RegistrationScreen'
// import { AppLoading } from 'expo';
import { StyleSheet, View } from 'react-native';

// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from 'expo-font';
// import React,{ useState } from 'react';
export default function App() {
  // const loadFonts = async () => {
  // await Font.loadAsync({
  //   "Roboto": require("./assets/fonts/Regular.ttf"),

  // });
  // };


  // const [isReady, setIsReady] = useState(false)
  // if (!isReady) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  // }

  return (

    <View style={styles.container}>

      <StatusBar style="auto" />

   
       
        <RegistrationScreens />
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 400,
      marginBottom: 0,
    backgroundColor: '#fff',

    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    height:812,
    // justifyContent: 'center',
    justifyContent: 'flex-end',
    // marginBottom: 78,

    // alignItems: 'center',
  },


});
