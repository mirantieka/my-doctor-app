import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';
import {storeData} from '../../utils/localStorage';
import base64 from 'react-native-image-base64';

export default function UploadPhoto({navigation, route}) {
  const{fullName, profession, uid} = route.params;

  const [hasPhoto, setHasPhoto] = useState(false);
  const [avatar, setAvatar] = useState(ILNullPhoto);
  const [photoDB, setPhotoDB] = useState('');

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
        showMessage({
          message: 'Gagal memuat image',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const source = {uri: response.assets[0].uri};

        base64
          .getBase64String(response.assets[0].uri)
          .then(res=>{
            console.log('res: ', res)
            setPhotoDB(`data: ${response.assets[0].type};base64, ${res}`);
          });
        
        setAvatar(source);
        setHasPhoto(true);

        console.log('response: ', response);
        
      }
    });
  };

  const uploadPhotoDB = () => {
    Firebase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoDB});

    //store ke localstorage
    const data = route.params;
    data.photo = photoDB;
    storeData('user', data);

    //route
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.photoWrapper} onPress={getImage}>
            <Image source={avatar} style={styles.addPhoto} />
            {hasPhoto && <IconRemovePhoto style={styles.btnAddPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.btnAddPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profesion}>{profession}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadPhotoDB}
          />
          <Gap height={30} />
          <Link
            title="Skip for this"
            textAlign="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
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
    borderRadius: 110 / 2,
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
    right: 0,
  },
  container: {
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomContainer: {
    marginBottom: 64,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  name: {
    fontSize: 24,
    marginTop: 26,
    fontFamily: fonts.primary.semiBold,
    color: colors.text.primary,
  },
  profesion: {
    fontSize: 18,
    marginTop: 4,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
