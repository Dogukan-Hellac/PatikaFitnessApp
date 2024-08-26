import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export default function MemberSign({ navigation }) {
    const [userName, setUserName] = useState(null)
    const [userSurname, setUserSurname] = useState(null)
    const [userAge, setUserAge] = useState(null)
    const [userMail, setUserMail] = useState(null)
    const [userHometown, setUserHomwtown] = useState(null)

    function handleSubmit() {
        if (
            !userName ||
            !userSurname ||
            !userAge ||
            !userMail ||
            !userHometown
        ) {
            Alert.alert('Doğu Fitness Salonu', 'Bilgiler boş bırakılamaz!')
            return
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown
        }
        navigation.navigate('MemberResultScreen', {user})
    }

    return (
        <View style={styles.container}>
            <Input
                label="Üye Adı"
                placeholder="Üyenin ismini giriniz..."
                onChangeText={setUserName}
            />
            <Input
                label="Üye Soyadı"
                placeholder="Üyenin soyismini giriniz..."
                onChangeText={setUserSurname}
            />
            <Input
                label="Üye Yaş"
                placeholder="Üyenin yaşını giriniz..."
                onChangeText={setUserAge}
            />
            <Input
                label="Üye E-posta"
                placeholder="Üyenin e-posta adresini giriniz..."
                onChangeText={setUserMail}
            />
            <Input
                label="Üye Memleketi"
                placeholder="Üyenin memleketini giriniz..."
                onChangeText={setUserHomwtown}
            />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
})