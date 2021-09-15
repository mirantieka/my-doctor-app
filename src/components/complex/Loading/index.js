import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

export default function Loading() {
    return (
        <View style={styles.page}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.loading,
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginTop: 11,
        fontFamily: fonts.primary.semiBold,
        fontSize: 17,
        color: colors.primary
    }
})
