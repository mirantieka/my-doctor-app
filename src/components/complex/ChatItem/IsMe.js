import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { colors, fonts } from '../../../utils';

export default function IsMe() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.text}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    page:{
        alignItems: 'flex-end',
        paddingRight: 16,
        marginBottom: 20
    },
    container: {
        padding: 12,
        paddingRight: 16,
        backgroundColor: colors.card.primary,
        marginBottom: 8,
        maxWidth: '70%',
        borderRadius: 10,
        borderBottomRightRadius: 0
    },
    text: {
        fontFamily: fonts.primary.normal,
        fontSize: 14,
        color: colors.text.primary
    },
    time: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary
    }
});
