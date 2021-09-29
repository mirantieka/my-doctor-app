import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILDokterAnak, ILDokterObat, ILDokterUmum, ILPsikiater } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorCategory({category, onPress}) {
    const Icon = () => {
        if (category === 'dokter umum') {
            return <Image source={ILDokterUmum} style={styles.image} />
        }
        if (category === 'psikiater') {
            return <Image source={ILPsikiater} style={styles.image} />
        }
        if (category === 'dokter obat') {
            return <Image source={ILDokterObat} style={styles.image} />
        }
        if (category === 'dokter anak') {
            return <Image source={ILDokterAnak} style={styles.image} />
        }
        return <Image source={ILDokterUmum} style={styles.image} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
           <Icon />
            <Text style={styles.title}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 46,
        height: 46,
        marginBottom: 28
    },
    container: {
        backgroundColor: colors.card.primary,
        borderRadius: 10,
        padding: 12,
        marginRight: 12,
        width: 100
        
    },
    title: {
        fontFamily: fonts.primary.normal,
        fontSize: 12,
        color: colors.text.secondary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary.semiBold,
        color: colors.text.primary
    }
})
