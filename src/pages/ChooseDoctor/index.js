import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor4} from '../../assets';
import {Header, List} from '../../components';
import {Firebase} from '../../config';
import {colors, showError} from '../../utils';

export default function ChooseDoctor({navigation, route}) {
  const doctorCtg = route.params;
  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    getListDoctor(doctorCtg.category);
    return () => {
      setListDoctor([]);
    };
  }, [doctorCtg.category]);

  const getListDoctor = category => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then(res => {
        console.log('doctor category: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('hasil parse list doctor: ', data);
          setListDoctor(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        title={`Pilih ${doctorCtg.category}`}
        type="back-light"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        {listDoctor.map(item => {
          return (
            <List
            pic={{uri: item.data.photo}}
            name={item.data.fullName}
            desc={item.data.gender}
            type="next"
            onPress={() => navigation.navigate('DoctorProfile', item)}
          />
          )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {},
});
