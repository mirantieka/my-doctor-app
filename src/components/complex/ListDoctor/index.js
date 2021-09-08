import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconNext } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListDoctor({pic, name, desc, type, onPress}) {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <Image source={pic} style={styles.avatar} />
      <View style={styles.profile}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === "next" && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    marginRight: 12
  },
  page: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  name: {
      fontFamily: fonts.primary.normal,
      fontSize: 16,
      color: colors.text.primary
  },
  desc: {
      fontFamily: fonts.primary.light,
      fontSize: 12,
      color: colors.text.secondary
  },
  profile: {
      flex: 1
  }
});
