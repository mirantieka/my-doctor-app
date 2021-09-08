import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chatting() {
  return (
    <View style={styles.page}>
      <Header
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
        type="header-profile"
      />
      <View style={styles.container}>
        <Text style={styles.chatDate}>Senin, 20 Maret 2021</Text>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  chatDate: {
    textAlign: 'center',
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    paddingVertical: 20,
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
      flex: 1
  }
});
