import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Gap } from '../..'
import { colors, fonts } from '../../../utils'

export default function NewsItem({title, pic, date}) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Gap height={4} />
            <Text style={styles.time}>{date}</Text>
            </View>
            <Image source={pic} style={styles.picture} />
        </View>
    )
}

const styles = StyleSheet.create({
    picture: {
        width: 80,
        height: 60
    },
    page: {
        flexDirection: 'row',
        paddingBottom: 12,
        paddingTop: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 16,
    },
    container: {
        flex: 1,
    },
    title: {
        width: '90%',
        lineHeight: 22,
        fontFamily: fonts.primary.semiBold,
        fontSize: 16,
        color: colors.text.primary
    },
    time: {
        fontFamily: fonts.primary.normal,
        fontSize: 12,
        color: colors.text.secondary
    }
})
