import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import { colors, fonts } from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ILlogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <View style={{marginTop: 40}}>
        <Input title="Email Address" />
        <Gap height={24} />
        <Input title="Password" />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} />
        <Gap height={40} />
        <Button title="Sign In" style={{marginTop: 40}} onPress={()=>navigation.replace('MainApp')} />
        <Gap height={30} />
        <Link title="Create New Account" size={16} textAlign="center" onPress={()=>navigation.navigate('Register')} />
        <Gap height={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 40,
    width: 200,
    color: colors.text.primary
  },
});
