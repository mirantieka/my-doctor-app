import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import List from '../../components/complex/List';
import {colors, fonts} from '../../utils';

export default function Messages() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      pic: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      pic: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      pic: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        { doctors.map(doctor =>{
            return (
                <List key={doctor.id} pic={doctor.pic} name={doctor.name} desc={doctor.desc} />
            )
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    marginLeft: 16,
    marginTop: 30,
  },
});
