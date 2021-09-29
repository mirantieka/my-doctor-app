import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IsMe from './IsMe'
import Others from './Others'

export default function ChatItem({isMe, text, time, avatar}) {
    if (isMe) {
        return (<IsMe text={text} time={time} />)
    }
    return (
        <Others avatar={avatar} text={text} time={time} />
    )
}

const styles = StyleSheet.create({})
