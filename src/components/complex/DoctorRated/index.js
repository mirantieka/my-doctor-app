import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '../..';
import {DummyDoctor, DummyDoctor2, DummyDoctor3, IconStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function DoctorRated({name, category, onPress}) {
    const Icon = () => {
        if (category === "Pediatrician") {
            return <Image source={DummyDoctor} style={styles.avatar} />    
        }
        if (category === "Dentist") {
            return <Image source={DummyDoctor2} style={styles.avatar} />
        }
        if (category === "Podiatrist") {
            return <Image source={DummyDoctor3} style={styles.avatar} />
        }
        return <Image source={DummyDoctor} style={styles.avatar} />
    }
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Icon />
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
  },
});
