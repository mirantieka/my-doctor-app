import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
  },
  container: {
    flexDirection: 'row',
  },
  textWrapper: {
      marginLeft: 12
  },
  name: {
      fontFamily: fonts.primary.semiBold,
      fontSize: 16,
      color: colors.text.primary
  },
  job: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary
}
});
