import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import List from '../../components/complex/List';
import {Firebase} from '../../config';
import {colors, fonts} from '../../utils';
import {getData} from '../../utils/localStorage';

export default function Messages({navigation}) {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getUserFromLocalStorage();

    const rootDB = Firebase.database().ref();
    const urlMessageForUser = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlMessageForUser);

    messagesDB.on('value', async snapshot => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          console.log('detail doctor: ', detailDoctor.val());
          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);

        console.log('new data history: ', data);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getUserFromLocalStorage = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map(chat => {
          const doctor = {
            id: chat.detailDoctor.uid,
            data: chat.detailDoctor,
          };
          return (
            <List
              key={chat.id}
              pic={{uri: chat.detailDoctor.photo}}
              name={chat.detailDoctor.fullName}
              desc={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting', doctor)}
            />
          );
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
