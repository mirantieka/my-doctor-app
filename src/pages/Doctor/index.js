import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  DoctorCategory,
  DoctorRated,
  Gap,
  NewsItem,
  UserProfile
} from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, showError } from '../../utils';

export default function Doctor({navigation}) {
  const [news, setNews] = useState([]);
  const [doctorCtg, setDoctorCtg] = useState([]);
  const [doctorRated, setDoctorRated] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    getNews();
    getRatedDoctor();
  }, []);

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null)
          setNews(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then(res => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter(el => el !== null)
          setDoctorCtg(filterData);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  const getRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then(res => {
        console.log('doctor rated: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map(key => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('hasil parse data: ', data);
          setDoctorRated(data);
        }
      })
      .catch(err => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <UserProfile onPress={() => navigation.navigate('Profile')} />
            <Gap height={30} />
            <Text style={styles.titleOne}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
            <Gap height={16} />
            <View style={styles.ctgContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.ctgWrapper}>
                  <Gap width={16} />
                  {doctorCtg.map(item => {
                    return (
                      <DoctorCategory
                        key={item.id}
                        category={item.category}
                        onPress={() => navigation.navigate('ChooseDoctor', item)}
                      />
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <Gap height={30} />
            <Text style={styles.titleTwo}>Top Rated Doctor</Text>
          </View>
          <Gap height={16} />
          <View style={styles.wrapperSection}>
            {doctorRated.map(item => {
              return (
                <DoctorRated
                  key={item.data.id}
                  name={item.data.fullName}
                  category={item.data.category}
                  avatar={{uri: item.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile', item)}
                />
              );
            })}
            <Gap height={14} />
            <Text style={styles.titleTwo}>Good News</Text>
          </View>
          {news.map(item => {
            return (
              <NewsItem
                key={item.id}
                pic={{uri: item.image}}
                title={item.title}
                date={item.date}
              />
            );
          })}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  titleOne: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 20,
    color: colors.text.primary,
    width: '60%',
  },
  titleTwo: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.text.primary,
  },
  ctgWrapper: {
    flexDirection: 'row',
  },
  ctgContainer: {
    marginLeft: -16,
    marginRight: -16,
  },
  container: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
