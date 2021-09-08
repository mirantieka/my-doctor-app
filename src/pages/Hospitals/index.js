import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBackground} from '../../assets';
import ListHospital from '../../components/complex/ListHospital';
import {colors, fonts} from '../../utils';

const width = Dimensions.get('screen').width;

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subtitle}>3 Nearby</Text>
      </ImageBackground>
      <View style={styles.container}>
        <ListHospital pic={DummyHospital1} type="Rumah Sakit" name="Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20" />
        <ListHospital pic={DummyHospital2} type="Rumah Sakit Anak" name="Happy Family & Kids" address="Jln. Surya Sejahtera 20" />
        <ListHospital pic={DummyHospital3} type="Rumah Sakit Jiwa" name="Tingkatan Paling Atas" address="Jln. Surya Sejahtera 20" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    width: width,
    height: 240,
  },
  title: {
    paddingTop: 30,
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fonts.primary.light,
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
  },
  container: {
      backgroundColor: colors.white,
      flex: 1,
      borderRadius: 20,
      marginTop: -20,
      paddingTop: 14
  }
});
