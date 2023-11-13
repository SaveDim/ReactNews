import React from "react";
import Main from "./components/Main";
import Contacts from "./components/FullInfo";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import  { NavigationContainer } from "@react-navigation/native";

const Stack =  createNativeStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{title:'Main'}}
                />
            <Stack.Screen
                name='FullInfo'
                component={Contacts}
                options={{title: 'FullInfo'}}
                />
        </Stack.Navigator>
    </NavigationContainer>
}

