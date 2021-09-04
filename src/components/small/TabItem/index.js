import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Gap } from '..';
import {
    IconDoctorActive,
  IconDoctorInactive,
  IconHospitalsActive,
  IconHospitalsInactive,
  IconMessagesActive,
  IconMessagesInactive,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function TabItem({title, onPress, onLongPress, active}) {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctorInactive />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessagesInactive />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitalsInactive />;
    }
    return <IconDoctorInactive />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} active={active}>
      <Icon />
      <Gap height={4} />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    textAlign: 'center',
    fontFamily: fonts.primary.semiBold,
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive
  }),
});
