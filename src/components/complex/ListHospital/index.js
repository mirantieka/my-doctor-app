import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Gap } from '../..';
import {DummyHospital, ILHospitalBackground} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListHospital({type, name, address, pic}) {
  return (
    <View style={styles.page}>
      <Image source={{uri: pic}} style={styles.picture} />
      <View>
        <Text style={styles.name}>{type}</Text>
        <Text style={styles.name}>{name}</Text>
        <Gap height={6} />
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    width: 80,
    height: 60,
    marginRight: 16
  },
  page: {
      flexDirection: 'row',
      padding: 16,
      borderBottomWidth: 1,
      borderColor: colors.border
  },
  name: {
      fontFamily: fonts.primary.normal,
      fontSize: 16,
      color: colors.text.primary
  },
  address: {
      fontFamily: fonts.primary.light,
      fontSize: 12,
      color: colors.text.secondary
  }
});
