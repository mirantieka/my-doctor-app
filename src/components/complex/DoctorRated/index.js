import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {DummyDoctor, DummyDoctor2, DummyDoctor3, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorRated({name, category, onPress, avatar}) {
    
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Gap height={2} />
        <Text style={styles.category}>{category}</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    paddingBottom: 16,
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2
  },
  rate: {
    flexDirection: 'row',
  },
  profile: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
  },
  category: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize'
  },
});
