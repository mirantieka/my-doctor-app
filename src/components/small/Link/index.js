import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../../../utils'

export default function Link({title, size, textAlign, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.link(size, textAlign)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: (size, textAlign) => ({
        fontFamily: fonts.primary[600],
        fontSize: size,
        textAlign: textAlign,
        color: '#7D8797',
        textDecorationLine: 'underline'
    })
})
