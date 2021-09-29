import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components/complex';
import {colors, fonts, getChatTime, setChatDate, showError} from '../../utils';
import {getData} from '../../utils/localStorage';
import {Firebase} from '../../config';

export default function Chatting({navigation, route}) {
  const doctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getUserFromLocalStorage();
    const chatID = `${user.uid}_${doctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Firebase.database()
      .ref(urlFirebase)
      .on('value', snapshot => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map(key => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            Object.keys(dataChat).map(itemChat => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [doctor.data.uid, user.uid]);

  const getUserFromLocalStorage = () => {
    getData('user').then(res => {
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();

    const data = {
      sentBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${doctor.data.uid}`;

    const urlFirebase = `chatting/${chatID}/allChat/${setChatDate(today)}`;

    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        avatar={{uri: doctor.data.photo}}
        name={doctor.data.fullName}
        desc={doctor.data.category}
        type="header-profile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <ScrollView>
          {chatData.map(chat => {
            return (
              <View key={chat.id}>
                <Text style={styles.chatDate}>{chat.id}</Text>
                {chat.data.map(itemChat => {
                  const isMe = itemChat.data.sentBy === user.uid
                  return(
                    <ChatItem 
                    key={itemChat.id}
                    isMe={isMe}
                    text={itemChat.data.chatContent}
                    time={itemChat.data.chatTime}
                    avatar={isMe ? null : {uri: doctor.data.photo}} />
                  )
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={value => setChatContent(value)}
        onPress={chatSend}
      />
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
    flex: 1,
  },
});
