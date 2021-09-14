import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyDoctor5 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function Others() {
  return (
    <View style={styles.page}>
        <Image source={DummyDoctor5} style={styles.avatar} />
        <View>
      <View style={styles.container}>
        <Text style={styles.text}>
          Oh tentu saja tidak karena jeruk itu sangat sehat...
        </Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'flex-end',
    paddingLeft: 16,
    marginBottom: 20,
    flexDirection: 'row'
  },
  container: {
    padding: 12,
    backgroundColor: colors.card.secondary,
    marginBottom: 8,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.white,
  },
  time: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  avatar: {
      width: 30,
      height: 30,
      marginRight: 12
  }
});
