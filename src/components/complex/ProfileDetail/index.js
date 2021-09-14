import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../..';
import {colors, fonts} from '../../../utils';

export default function ProfileDetail({label, value}) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Gap height={6} />
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
  },
  value: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    marginBottom: 16
  },
  page: {
    borderBottomWidth: 1,
    marginBottom: 16,
    borderColor: colors.border,
  },
  container: {
    marginLeft: 16,
  },
});
