import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {getData} from '../../../utils/localStorage';

export default function UserProfile({onPress}) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      console.log('res: ', res)
      const data = res;
      data.photo = {uri: res.photo};
      console.log('new profile: ', data);
      setProfile(res);
    });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.job}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    borderRadius: 46/2
  },
  container: {
    flexDirection: 'row',
  },
  textWrapper: {
    marginLeft: 12,
  },
  name: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  job: {
    fontFamily: fonts.primary.normal,
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
