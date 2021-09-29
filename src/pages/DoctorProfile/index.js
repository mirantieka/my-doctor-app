import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor} from '../../assets';
import {Button, Gap, Header, ProfileItem} from '../../components/';
import {ProfileDetail} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation, route}) {
  const doctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ProfileItem
        name={doctor.data.fullName}
        desc={doctor.data.category}
        image={{uri: doctor.data.photo}}
      />
      <Gap height={26} />
      <ProfileDetail label="Alumnus" value={doctor.data.university} />
      <ProfileDetail
        label="Tempat Praktik"
        value={doctor.data.hospital_address}
      />
      <ProfileDetail label="No. STR" value={doctor.data.str_number} />
      <View style={styles.btn}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', doctor)}
        />
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
    paddingTop: 7,
  },
});
