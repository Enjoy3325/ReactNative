import React, { useState } from "react"
import { useCallback } from 'react';
import {
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Keyboard,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
} from "react-native"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const initialState = {
    login: '',
    email: '',
    password: '',
}

export const RegistrationScreens = () => {
    const [fontsLoaded] = useFonts({
        'Inter': require('../assets/fonts/Inter.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    });

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState)
    const keyboardHide = () => {
        setIsShowKeyboard(false)
        Keyboard.dismiss()
    }
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.container} onLayout={onLayoutRootView}>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 78 : 32 }}>
                        <View style={styles.avatarWrapper}>
                            <View>
                                <Image source={require('../assets/images/add.svg')}></Image>
                            </View>
                        </View>

                        <Text style={styles.text}>Регистрация</Text>
                        <SafeAreaView style={styles.inputView}>
                            <TextInput style={styles.input}
                                onFocus={() => setIsShowKeyboard(true)}
                                onChangeText={(value) => setState(prevState => ({ ...prevState, login: value }))}
                                textAlign={'left'}
                                value={state.login}
                                placeholderTextColor={'#BDBDBD'}
                                placeholder="Логин" />
                            <TextInput style={styles.input}
                                onFocus={() => setIsShowKeyboard(true)}
                                onChangeText={(value) => setState(prevState => ({ ...prevState, email: value }))}
                                textAlign={'left'}
                                value={state.email}
                                placeholderTextColor={'#BDBDBD'}
                                placeholder="Адрес электронной почты" />
                            <View style={styles.boxInputPassword}>
                                <TextInput style={styles.input}
                                    onFocus={() => setIsShowKeyboard(true)}
                                    onChangeText={(value) => setState(prevState => ({ ...prevState, password: value }))}
                                    textAlign={'left'}
                                    value={state.password}
                                    placeholderTextColor={'#BDBDBD'}
                                    placeholder="Пароль"
                                    secureTextEntry={true} />
                                <Text style={styles.textInputPassword}>Показать</Text>
                            </View>

                        </SafeAreaView>
                        <TouchableOpacity onPress={keyboardHide} activeOpacity={0.8} style={styles.button} >
                            <Text style={styles.textButton}>Зарегистрироваться</Text>
                        </TouchableOpacity>
                        <Text style={styles.subTitleAuth}>Уже есть аккаунт? Войти</Text>

                    </View>
                </KeyboardAvoidingView>

            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 0,
        backgroundImage: URL('../assets/images/bg.png'),
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },

    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        height: 812,
        // justifyContent: 'center',
        justifyContent: 'flex-end',
        // marginBottom: 78,

        // alignItems: 'center',
    },
    form: {
        // flex:s,
        // position: 'relative',
        height: 549,
        //    height:'67.611%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // justifyContent: 'center',
        // justifyContent: 'flex-start',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#ffffff',
        marginHorizontal: 16,
        // paddingBottom: 78,
        // paddingTop:92,
        //  paddingBottom: 33,
        // marginBottom:78,
    },

    avatarWrapper: {
        // position: 'absolute',
        // justifyContent: 'center',
        top: '-7%',
        left: '0%',
        // marginTop:32,
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,

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
    inputView: {
        marginBottom: 27,


    },
    boxInputPassword: {
        // position: 'relative',
    },
    input: {
        fontFamily: 'Roboto',
        width: 343,
        height: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        // marginRight: 'auto',
        // marginLeft: 'auto',
        padding: 16,
        marginBottom: 16,
        color: '#212121',

    },
    textInputPassword: {
        fontFamily: 'Roboto',
        position: 'absolute',
        top: '22%',
        right: '5%',
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    },

    button: {
        width: 343,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        // marginLeft: 'auto',
        // marginRight: 'auto',
        // marginHorizontal: 35,
        marginBottom: 16,
    },
    textButton: {
        fontFamily: 'Roboto',
        textAlign: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        // paddingLeft: 'auto',
        // paddingRight: 'auto',
        fontSize: 16,
        lineHeight: 19,
        color: '#ffffff',
    },
    subTitleAuth: {
        fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        // marginBottom: 66,
    },
})