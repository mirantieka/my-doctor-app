import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILlogo} from '../../assets/illustration';
import {Firebase} from '../../config';
import {colors} from '../../utils';

export default function Splash({navigation}) {
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          //user masih login
          console.log('status: ', user);
          navigation.replace('MainApp');
        } else {
          //user sudah logout
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILlogo />
      <Text style={styles.app_name}>MyDoctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app_name: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary,
    marginTop: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
});
