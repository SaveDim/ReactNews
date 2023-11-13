import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from "react-native";
import { gStyle } from "../styles/style";


export default function Main({ navigation }) {
    const loadScene = () => {
        navigation.navigate('FullInfo')
    }

    const [news, setNews] = useState([
        { name: 'Google', announce: 'Google announce', full: 'Google is awesome!'},
        { name: 'Apple', announce: 'Apple announce', full: 'Apple is awesome!'},
        { name: 'Microsoft', announce: 'Microsoft announce', full: 'Microsoft is awesome!'}
    ])

        return (
            <View style={gStyle.main}>
                <Text style={gStyle.title}>Main page</Text>
                <FlatList data={news} renderItem={({item}) => (
                    <TouchableOpacity onPress={ () => navigation.navigate('FullInfo', item)}>
                        <Text>{ item.name }</Text>
                        <Text>{ item.announce }</Text>
                    </TouchableOpacity>
                )} />
            </View>
        );
}
