import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  DoctorRated,
  Gap,
  NewsItem,
  UserProfile,
} from '../../components';
import {colors, fonts} from '../../utils';
import { DummyNews, DummyNews2, DummyNews3, JSONCategoryDoctor, JSONRatedDoctor } from '../../assets';

export default function Doctor({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperSection}>
          <Gap height={30} />
          <UserProfile />
          <Gap height={30} />
          <Text style={styles.titleOne}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
          <Gap height={16} />
          <View style={styles.ctgContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.ctgWrapper}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map(item => {
                  return (
                    <DoctorCategory key={item.id} category={item.category} onPress={()=>navigation.navigate('ChooseDoctor')} />
                  )
                })}
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
            <Text style={styles.titleTwo}>Top Rated Doctor</Text>
          </View>
          <Gap height={16} />
          <View style={styles.wrapperSection}>
            {JSONRatedDoctor.data.map(item =>{
              return (
                <DoctorRated key={item.id} name={item.name} category={item.category} />
              )
            })}
            <Gap height={14} />
            <Text style={styles.titleTwo}>Good News</Text>
          </View>
          <NewsItem pic={DummyNews} title="Is it safe to stay at home during coronavirus?" />
          <NewsItem pic={DummyNews2} title="Consume yellow citrus helps you healthier" />
          <NewsItem pic={DummyNews3} title="Learn how to make a proper orange juice at home" />
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
