import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';

const AccountScreen = () => {
    return (
        <View>
            <Text>{auth().currentUser.email}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => auth().signOut()}
            >
                <Text style={styles.btnText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AccountScreen;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#BC9115',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 30,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})
