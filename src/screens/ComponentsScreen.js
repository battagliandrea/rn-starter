import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {

    const name = "Andrea Battaglia";

    return (
        <View>
            <Text style={style.headerText}>Getting started with react native!</Text>
            <Text style={style.bodyText}>My name {name}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    headerText: {
        fontSize:45
    },
    bodyText: {
        fontSize:20
    }
});

export default ComponentsScreen;