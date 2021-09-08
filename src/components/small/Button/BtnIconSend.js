import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconSend, IconSendDisable } from '../../../assets'
import { colors } from '../../../utils'

export default function BtnIconSend({disable}) {
    return (
        <View style={styles.container(disable)}>
            {disable && <IconSendDisable />}
            {!disable && <IconSend />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: (disable) => (
        {
            paddingLeft: 8.09,
            paddingTop: 3.09,
            backgroundColor: disable ? colors.input : colors.tertiary,
            width: 45,
            borderRadius: 10
        }
    )
})
