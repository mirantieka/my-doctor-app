import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconSend, IconSendDisable } from '../../../assets'
import { colors } from '../../../utils'

export default function BtnIconSend({disable, onPress}) {
    if (disable) {
        <View style={styles.container(disable)}>
            <IconSendDisable />
        </View>
    }
    return (
        <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
           <IconSend />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: (disable) => (
        {
            paddingLeft: 9.09,
            paddingTop: 5.09,
            backgroundColor: disable ? colors.input : colors.tertiary,
            width: 45,
            borderRadius: 10
        }
    )
})
