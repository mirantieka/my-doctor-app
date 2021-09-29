import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { Button } from '../..';
import { colors, fonts } from '../../../utils';

export default function InputChat({value, onChangeText, onPress}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input(value)} placeholder="Tulis pesan disini" value={value} onChangeText={onChangeText} />
      <Button type="btn-icon-send" disable={value.length < 1} onPress={onPress}  />
    </View>
  );
}

const styles = StyleSheet.create({
    input: value => ({
        backgroundColor: colors.input,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontFamily: fonts.primary.normal,
        fontSize: 14,
        color: value ? colors.text.primary : colors.text.input,
        paddingLeft: 15,
    }),
    container: {
        flexDirection: 'row',
        padding: 16,
    }
});
