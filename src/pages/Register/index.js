import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import { colors } from '../../utils';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <View>
        <Header title="Daftar Akun" onPress={()=>navigation.goBack()} />
      </View>
      <View style={{paddingHorizontal: 40, marginTop: 4}}>
        <Input title="Full Name" />
        <Gap height={24} />
        <Input title="Pekerjaan" />
        <Gap height={24} />
        <Input title="Email Address" />
        <Gap height={24} />
        <Input title="Password" />
        <Gap height={40} />
        <Button title="Continue" onPress={()=> navigation.navigate('UploadPhoto')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
