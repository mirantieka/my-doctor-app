import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../small'
import HeaderProfile from './HeaderProfile'

export default function Header({title, onPress, type, name, desc, avatar}) {
    if (type === "header-profile") {
        return (
            <HeaderProfile avatar={avatar} name={name} desc={desc} onPress={onPress}/>
        )
    }
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: (type) => ({
        flexDirection: 'row',
        backgroundColor: type === "back-light" ? colors.secondary : colors.white,
        paddingHorizontal: 20,
        paddingVertical: 36,
        alignItems: 'center',
        borderBottomLeftRadius: type === "back-light" ? 20 : 0,
        borderBottomRightRadius: type === "back-light" ? 20 : 0,
    }),
    text: (type) => ({
        flex: 1,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: type === "back-light" ? colors.white : colors.text.primary,
        textTransform: 'capitalize'
    })
})
