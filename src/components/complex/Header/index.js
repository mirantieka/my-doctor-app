import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../small'

export default function Header({title, onPress}) {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-dark" onPress={onPress} />
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 36,
        alignItems: 'center',
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.text.primary
    }
})
