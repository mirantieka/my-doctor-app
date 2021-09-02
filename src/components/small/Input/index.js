import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { fonts } from '../../../utils'

export default function Input({title}) {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E9E9E9',
        marginTop: 6
    },
    text: {
        color: '#7D8797',
        fontFamily: fonts.primary.normal,
        fontSize: 16
    }
})
