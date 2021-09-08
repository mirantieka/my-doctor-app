import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { Button } from '../..';
import { colors, fonts } from '../../../utils';

export default function InputChat() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <Button type="btn-icon-send" disable  />
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.input,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontFamily: fonts.primary.normal,
        fontSize: 14,
        color: colors.text.input,
    },
    container: {
        flexDirection: 'row',
        padding: 16
    }
});
