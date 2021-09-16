import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnIconSend from './BtnIconSend'
import IconOnly from './IconOnly'

export default function Button({type, title, onPress, icon, disable}) {
    if (type === "btn-icon-send") {
        return <BtnIconSend disable={disable} onPress={onPress} />
    }
    if (type === "icon-only") {
        return <IconOnly icon={icon} onPress={onPress} />
    }
    if (disable) {
        return (
            <View style={styles.disableBg}>
                <Text style={styles.disableText}>{title}</Text>
            </View>
        )
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
    disableBg: {
        backgroundColor: colors.disabe.background,
        paddingVertical: 10,
        borderRadius: 10
    },
    text: (type) => ({
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 18,
        color: type === 'secondary' ? '#112340' : 'white',
    }),
    disableText: {
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        fontSize: 18,
        color: colors.disabe.text,
    }
})
