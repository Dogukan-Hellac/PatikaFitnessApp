import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MemberResult({ route }) {
    const { user } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
            <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10
    },
    message: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center'
    },
})

export default MemberResult;