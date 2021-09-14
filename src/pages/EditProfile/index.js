import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { DummyUser } from '../../assets';
import { Button, Gap, Header, Input, ProfileItem } from '../../components';
import { colors } from '../../utils';

export default function EditProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ProfileItem isRemoved image={DummyUser} />
          <Gap height={26} />
          <Input title="Full Name" />
          <Gap height={24} />
          <Input title="Profession" />
          <Gap height={24} />
          <Input title="Email Address" />
          <Gap height={24} />
          <Input title="Password" />
          <Gap height={40} />
          <Button title="Save Profile" onPress={()=>navigation.goBack()} />
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
