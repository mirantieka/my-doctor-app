import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import base64 from 'react-native-image-base64';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Input, ProfileItem} from '../../components';
import {Firebase} from '../../config';
import {colors, showError} from '../../utils';
import {getData, storeData} from '../../utils/localStorage';

export default function EditProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    photo: ILNullPhoto,
    uid: '',
  });

  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoDB, setPhotoDB] = useState('');

  useEffect(() => {
    getData('user').then(res => {
      console.log('res: ', res);
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const onUpdate = () => {
    console.log('profile: ', profile);

    console.log('setPassword: ', password);
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter');
      } else {
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      updateProfileData();
    }
  };

  //Update Password
  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showError(err.message);
        });
      }
    });
  };

  //Update Profile
  const updateProfileData = () => {
    const data = profile;
    data.photo = photoDB;
    Firebase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(success => {
        console.log('success: ', success);
        storeData('user', data);
        navigation.replace('MainApp');
      })
      .catch(error => {
        console.log('error: ', error.Message);
        showError(error.message);
      });
  };

  //Upload Image from gallery device
  const getImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.5,
      maxWidth: 200,
      maxHeight: 200,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        showError('Gagal memuat image');
      } else {
        const source = {uri: response.assets[0].uri};

        base64.getBase64String(response.assets[0].uri).then(res => {
          console.log('res: ', res);
          setPhotoDB(`data: ${response.assets[0].type};base64, ${res}`);
        });

        setPhoto(source);

        console.log('response: ', response);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ProfileItem isRemoved image={photo} onPress={getImage} />
          <Gap height={26} />
          <Input
            title="Full Name"
            value={profile.fullName}
            onChangeText={value => changeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            title="Profession"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input
            disable
            title="Email Address"
            value={profile.email}
            onChangeText={value => changeText('email', value)}
          />
          <Gap height={24} />
          <Input
            title="Password"
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={onUpdate} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
