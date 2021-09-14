import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconAccount, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function List({pic, name, desc, type, onPress, icon}) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconAccount />
    }
    if (icon === 'language') {
      return <IconLanguage />
    }
    if (icon === 'rate') {
      return <IconRate />
    }
    if (icon === 'help') {
      return <IconHelp />
    }
  }
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      {icon ? <Icon /> : <Image source={pic} style={styles.avatar} />}
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
      flex: 1,
      marginLeft: 16
  }
});
