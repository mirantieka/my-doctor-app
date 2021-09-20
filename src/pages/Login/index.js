import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ILlogo } from '../../assets';
import { Button, Gap, Input, Link, Loading } from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, showError, useForm } from '../../utils';
import { storeData } from '../../utils/localStorage';

export default function Login({navigation}) {
  const stateGlobal = useSelector((state)=> state)
  const dispatch = useDispatch()

  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  // const [loading, setLoading] = useState(false);

  const onLogin = () => {
    console.log(form);
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log('success: ', res);
        Firebase.database()
        .ref(`users/${res.user.uid}/`)
        .once('value').then(resDB=>{
          console.log('resDB: ', resDB.val())
          if (resDB.val()) {
            storeData('user', resDB.val())
            navigation.replace('MainApp')
          }
        });
      })
      .catch(err => {
        dispatch({type: 'SET_LOADING', value: false});
        const errorMessage = err.message;
        console.log('error: ', errorMessage);
        showError(errorMessage)
      });
    
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={40} />
          <ILlogo />
          <Text style={styles.title}>Konsultasi dengan siapa hari ini?</Text>
          <View style={{marginTop: 40}}>
            <Input
              title="Email Address"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              title="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" style={{marginTop: 40}} onPress={onLogin} />
            <Gap height={30} />
            <Link
              title="Create New Account"
              size={16}
              textAlign="center"
              onPress={() => navigation.navigate('Register')}
            />
            <Gap height={24} />
          </View>
        </ScrollView>
      </View>
      {stateGlobal.loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginTop: 40,
    width: 200,
    color: colors.text.primary,
  },
});
