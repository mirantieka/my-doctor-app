import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconAddPhoto, IconRemovePhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ProfileItem({name, desc, isRemoved, image, onPress}) {
  return (
    <View style={styles.page}>
      {!isRemoved && (
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} />
          {/* <IconAddPhoto style={styles.icon} /> */}
        </View>
      )}
      {isRemoved && (
        <TouchableOpacity style={styles.imageWrapper} onPress={onPress}>
          <Image source={image} style={styles.image} />
          <IconRemovePhoto style={styles.icon} />
        </TouchableOpacity>
      )}
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  imageWrapper: {
    borderWidth: 1,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 130 / 2,
    borderColor: colors.border,
  },
  page: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginTop: 16,
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  job: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 8,
  },
});
