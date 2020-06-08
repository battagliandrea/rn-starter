import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={()=> onIncrease()} title={`Increase ${color}`}/>
            <Button onPress={()=> onDecrease()} title={`Decreare ${color}`}/>
        </View>
    )
};

const style = StyleSheet.create({});

export default ColorCounter;