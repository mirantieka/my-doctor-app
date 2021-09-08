import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor4} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter Anak"
        type="back-light"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ListDoctor
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="Wanita"
          type="next"
          onPress={()=>navigation.navigate('Chatting')}
        />
        <ListDoctor
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="Wanita"
          type="next"
        />
        <ListDoctor
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="Wanita"
          type="next"
        />
        <ListDoctor
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="Wanita"
          type="next"
        />
        <ListDoctor
          pic={DummyDoctor4}
          name="Alexander Jannie"
          desc="Wanita"
          type="next"
        />
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
