import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IsMe from './IsMe'
import Others from './Others'

export default function ChatItem({isMe}) {
    if (isMe) {
        return (<IsMe />)
    }
    return (
        <Others />
    )
}

const styles = StyleSheet.create({})
