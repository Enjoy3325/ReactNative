
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import RegistrationScreens  from './Screens/RegistrationScreen'
import LoginScreen from './Screens/LoginScreen';

export default function App() {

  return (
    <NavigationContainer>

    <View style={styles.container}>

      <RegistrationScreens />
      {/* <LoginScreen/> */}
          <StatusBar style="auto" />

    </View>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
