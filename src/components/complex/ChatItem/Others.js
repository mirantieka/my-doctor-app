import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor5} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Others({text, time, avatar}) {
  return (
    <View style={styles.page}>
      <Image source={avatar} style={styles.avatar} />
      <View>
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'flex-end',
    paddingLeft: 16,
    marginBottom: 20,
    flexDirection: 'row',
    maxWidth: '60%',
  },
  container: {
    padding: 12,
    backgroundColor: colors.card.secondary,
    marginBottom: 8,
    maxWidth: '90%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.white,
    // textAlign: 'right'
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    marginRight: 12,
  },
});
