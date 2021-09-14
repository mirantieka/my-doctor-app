import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor } from '../../assets';
import {
  Button,
  Gap,
  Header,
  ProfileItem
} from '../../components/';
import { ProfileDetail } from '../../components';
import { colors } from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={()=>navigation.goBack()} />
      <ProfileItem name="Alexa Rachel" desc="Pediatrician" image={DummyDoctor} />
      <Gap height={26} />
      <ProfileDetail label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileDetail label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileDetail label="No. STR" value="0000116622081996" />
      <View style={styles.btn}>
        <Button title="Start Consultation" onPress={()=>navigation.navigate('Chatting')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  btn: {
      padding: 40,
      paddingTop: 7
  }
});
