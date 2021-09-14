import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={()=>navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.photoWrapper}>
            <Image source={ILNullPhoto} style={styles.addPhoto} />
            <IconAddPhoto style={styles.btnAddPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profesion}>Product Designer</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Button title="Upload and Continue" onPress={()=>navigation.replace('MainApp')} />
          <Gap height={30} />
          <Link title="Skip for this" textAlign="center" size={16} onPress={()=>navigation.replace('MainApp')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'orange',
    flex: 1,
  },
  addPhoto: {
    width: 110,
    height: 110,
  },
  photoWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.text.secondary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAddPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  container: {
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white
  },
  bottomContainer:{
      marginBottom: 64
  },
  profile:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
      flex: 1
  },
  name: {
      fontSize: 24,
      marginTop: 26,
      fontFamily: fonts.primary.semiBold,
      color: colors.text.primary
  },
  profesion: {
    fontSize: 18,
    marginTop: 4,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary
}
});
