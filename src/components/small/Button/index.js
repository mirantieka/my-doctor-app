import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fonts } from '../../../utils'
import IconOnly from './IconOnly'

export default function Button({type, title, onPress, icon}) {
    if (type === "icon-only") {
        return <IconOnly icon={icon} onPress={onPress} />
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
        paddingVertical: 10,
        borderRadius: 10
    }),
    text: (type) => ({
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 18,
        color: type === 'secondary' ? '#112340' : 'white',
        
    })
})