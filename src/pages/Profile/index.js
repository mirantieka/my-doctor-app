import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyUser } from '../../assets'
import { Gap, Header, List, ProfileItem } from '../../components'
import { colors } from '../../utils'

export default function Profile({navigation}) {
    return (
        <View style={styles.page}>
            <Header title="Profile" onPress={()=>navigation.goBack()} />
            <Gap height={10} />
            <ProfileItem name="Shayna Melinda" desc="Product Designer" image={DummyUser} />
            <Gap height={30} />
            <List name="Edit Profile" desc="Last update yesterday" type="next" icon="edit-profile" onPress={()=>navigation.navigate('EditProfile')} />
            <List name="Language" desc="Available 12 languages" type="next" icon="language" />
            <List name="Give Us Rate" desc="On Google Play Store" type="next" icon="rate" />
            <List name="Help Center" desc="Read our guidelines" type="next" icon="help" />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    }
})
