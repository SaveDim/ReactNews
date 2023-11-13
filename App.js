import React, {useState} from "react";
import {StyleSheet} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainStack from './navigate'
// import Contacts from "./components/Contacts";

    const fonts = async () => {
        await Font.loadAsync({
            'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
            'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
        });
    };

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (fontLoaded) {
        return (
            <MainStack />
        );
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFontLoaded(true)}
                onError={console.warn}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
