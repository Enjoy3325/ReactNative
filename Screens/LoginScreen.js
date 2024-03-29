
import React, { useState, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
} from "react-native";

import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialState = {
    email: "",
    password: "",
};

const LoginScreen = () => {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);

    const [fontsLoaded] = useFonts({
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
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
                <ImageBackground
                    style={styles.image}
                    source={require("../assets/images/bg.jpg")}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : ""}
                    >
                        <View
                            style={{
                                ...styles.containerForm,
                                marginBottom: isShowKeyboard ? -220 : 0,
                            }}
                        >
                            <View style={styles.form}>
                                <View>
                                    <Text style={styles.title}>Sign in</Text>
                                </View>
                                <View>
                                    <View>
                                        <TextInput
                                            placeholder="E-mail address"
                                            style={styles.input}
                                            value={state.email}
                                            onFocus={() => {
                                                setIsShowKeyboard(true);
                                            }}
                                            onChangeText={(value) =>
                                                setState((prevState) => ({
                                                    ...prevState,
                                                    email: value,
                                                }))
                                            }
                                        />
                                    </View>
                                    <View>
                                        <TextInput
                                            placeholder="Password"
                                            style={styles.input}
                                            secureTextEntry={true}
                                            value={state.password}
                                            onFocus={() => {
                                                setIsShowKeyboard(true);
                                            }}
                                            onChangeText={(value) =>
                                                setState((prevState) => ({
                                                    ...prevState,
                                                    password: value,
                                                }))
                                            }
                                        />
                                        <Text style={styles.textInputPassword}>Show</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.button}
                                    onPress={keyboardHide}
                                >
                                    <Text style={styles.textButton}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.subTitleAuth}>
                                    Don't have an account? Sign up
                                </Text>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
           flex: 1,
       },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-end",
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
        paddingTop: 32,
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
        backgroundColor: "#FF6C00",
    },
    textButton: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#ffffff",
    },
    textInputPassword: {
        position: "absolute",
        top: "48%",
        left: "85%",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        color: "#1b4371",
    },
    subTitleAuth: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 19,
        textAlign: "center",
        marginBottom: 120,
        color: "#1b4371",
    },
});