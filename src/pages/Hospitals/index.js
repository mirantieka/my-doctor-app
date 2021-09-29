import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DummyHospital1, DummyHospital2, DummyHospital3, ILHospitalBackground} from '../../assets';
import ListHospital from '../../components/complex/ListHospital';
import { Firebase } from '../../config';
import {colors, fonts, showError} from '../../utils';

const width = Dimensions.get('screen').width;

export default function Hospitals() {

  const [hospital, setHospital] = useState([])

  useEffect(() => {
    Firebase.database().ref('hospital/').once('value').then(res=>{
      console.log('hospital: ', res.val());
      if (res.val()) {
        setHospital(res.val())
      }
    }).catch(err => {
      showError(err.message)
    })
    
  }, [])
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBackground} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subtitle}>3 Nearby</Text>
      </ImageBackground>
      <View style={styles.container}>
        {hospital.map(item => {
          return(
            <ListHospital 
            key={item.id}
            pic={item.image} 
            type={item.type} 
            name={item.name} 
            address={item.address} />
          )
        })}
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
