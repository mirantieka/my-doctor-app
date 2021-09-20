import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, List, ProfileItem} from '../../components';
import {Firebase} from '../../config';
import {colors, showError} from '../../utils';
import {getData} from '../../utils/localStorage';

export default function Profile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: '',
  });

  useEffect(() => {
    getData('user').then(res => {
      console.log('user: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  }, []);

  const logout = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        console.log('success sign out');
        navigation.replace('GetStarted');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <Gap height={10} />
        {profile.fullName.length > 0 && (
          <ProfileItem
            name={profile.fullName}
            desc={profile.profession}
            image={profile.photo}
          />
        )}
        <Gap height={30} />
        <List
          name="Edit Profile"
          desc="Last update yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <List
          name="Language"
          desc="Available 12 languages"
          type="next"
          icon="language"
        />
        <List
          name="Give Us Rate"
          desc="On Google Play Store"
          type="next"
          icon="rate"
        />
        <List
          name="Help Center"
          desc="Read our guidelines"
          type="next"
          icon="help"
        />
        <View style={styles.btn}>
          <Button title="Logout" onPress={logout} />
        </View>
      </ScrollView>
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
    paddingTop: 20,
  },
});
