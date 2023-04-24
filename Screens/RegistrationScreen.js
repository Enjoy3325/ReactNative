import React, { useState, useCallback } from "react"
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Keyboard,
    Platform,
    ImageBackground,
    Image,
    TouchableWithoutFeedback,
} from "react-native"

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const initialState = {
    login: "",
    email: "",
    password: "",
}

export const RegistrationScreens = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState);
    };

    return (
        <TouchableWithoutFeedback onPress={() => keyboardHide()}>
            <View style={styles.container} onLayout={onLayoutRootView}>
                <ImageBackground style={styles.image} source={require("../assets/images/bg.jpg")}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : ''}>
                        <View style={{ ...styles.containerForm, marginBottom: isShowKeyboard ? -120 : 0 }}>
                            <View style={styles.avatarWrapper}>
                                <Image />
                                <Image source={require("../assets/images/add.png")} style={styles.iconAdd}></Image>
                            </View>
                            <View style={styles.form}>
                                <View>
                                    <Text style={styles.title}>Registration</Text>
                                </View>
                                    <View>
                                        <TextInput style={styles.input}
                                            onFocus={() => setIsShowKeyboard(true)}
                                            onChangeText={(value) => setState(prevState => ({ ...prevState, login: value }))}
                                            textAlign={'left'}
                                            value={state.login}
                                            placeholderTextColor={'#BDBDBD'}
                                            placeholder="Login" />

                                        <TextInput style={styles.input}
                                            onFocus={() => setIsShowKeyboard(true)}
                                            onChangeText={(value) => setState(prevState => ({ ...prevState, email: value }))}
                                            textAlign={'left'}
                                            value={state.email}
                                            placeholderTextColor={'#BDBDBD'}
                                            placeholder="E-mail address" />
                                    </View>

                                    <View>
                                        <TextInput style={styles.input}
                                            onFocus={() => setIsShowKeyboard(true)}
                                            onChangeText={(value) => setState(prevState => ({ ...prevState, password: value }))}
                                            textAlign={'left'}
                                            value={state.password}
                                            placeholderTextColor={'#BDBDBD'}
                                            placeholder="Password"
                                            secureTextEntry={true} />
                                        <Text style={styles.textInputPassword}>Show</Text>
                                    </View>

                                <View />
                                <TouchableOpacity onPress={keyboardHide}
                                    activeOpacity={0.8} style={styles.button} >
                                    <Text style={styles.textButton}>Register</Text>
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.subTitleAuth}>Do you already have an account? To come in</Text>
                                </View>
                            </View>
                        </View>
                    </KeyboardAvoidingView> 
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RegistrationScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
// justifyContent: 'center',
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        
    },
    title: {
        fontFamily: "Roboto-Regular",
        fontSize: 30,
        lineHeight: 35,
        letterSpacing: 0.01,
        textAlign: "center",
        marginBottom: 33,
        color: "#212121",
    },

    containerForm: {
        paddingTop: 92,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#ffffff",
    },
    form: {
        marginHorizontal: 16,
    },

    input: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        height: 50,
        padding: 16,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#e8e8e8",
        backgroundColor: "#f6f6f6",
        color: "#212121",
    },

    button: {
        alignItems: "center",
        justifyContent: "center",
        height: 51,
        marginTop: 43,
        marginBottom: 16,
        borderRadius: 100,
        backgroundColor: "#ff6c00",
    },

    avatarWrapper: {
        position: "absolute",
        left: "35%",
        top: "-15%",
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#f6f6f6",

    },
    text: {
        fontFamily: 'Roboto-Italic',
        fontSize: 30,
        lineHeight: 1.16,
        letterSpacing: 16,
        textAlign: 'center',
        marginBottom: 33,
        color: '#212121',
    },


    textInputPassword: {
        fontFamily: "Roboto-Regular",
        position: "absolute",
        top: "48%",
        left: "85%",
        fontSize: 16,
        lineHeight: 19,
        color: "#1b4371",
    },


    textButton: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#ffffff",
    },
    subTitleAuth: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        marginBottom: 32,
    },

    iconAdd: {
        position: "absolute",
        left: "89%",
        top: "65%",
        width: 25,
        height: 25,
        // color: "#FF6C00",
    },
});