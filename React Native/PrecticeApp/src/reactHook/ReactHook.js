import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ReactHook = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 40 }}>React Basic Hook</Text>
            <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate('UseStateScreen')}
            >
                <Text style={styles.btnText}>useState</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn1}
                onPress={() => navigation.navigate('UseEffectScreen')}
            >
                <Text style={styles.btnText}>useEffect</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#14f',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#f9fb35',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 30,
        height: 60,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'

    },
    btn1: {
        backgroundColor: '#f9fb35',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 20,
        height: 60,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ReactHook;
