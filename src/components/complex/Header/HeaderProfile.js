import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../..';
import {DummyDoctor5} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function HeaderProfile({name, desc, onPress, avatar}) {
  return (
    <View style={styles.page}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Gap height={6} />
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <Image source={avatar} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  name: {
      textAlign: 'center',
      color: colors.white,
      fontFamily: fonts.primary.semiBold,
      fontSize: 20,
      textTransform: 'capitalize'
  },
  desc: {
      textAlign: 'center',
      color: colors.text.subTitle,
      fontFamily: fonts.primary.normal,
      fontSize: 14,
      textTransform: 'capitalize'
  },
  profile: {
      flex: 1,
  },
  image: {
      width: 46,
      height: 46,
      borderRadius: 46/2
  }
});
