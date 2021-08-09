import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';

import auth from '@react-native-firebase/auth';

const HomePage = ({navigation}) => {        
    // console.log(this.props.navigation.state.params.user)
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff', fontSize: 40 }}>Home page</Text>
            <Text style={{ color: '#fff', fontSize: 40 }}>User information</Text>
            <Text style={{ color: '#fff', fontSize: 20 }}>{auth().currentUser.email}</Text>
            <TouchableOpacity
                    style={styles.btn1}
                    onPress={() => navigation.navigate('FireStore')}
                >
                    <Text style={styles.btnText}>Firebase Store</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 450 }}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => auth().signOut()}
                >
                    <Text style={styles.btnText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor:'#14f',
        alignItems:'center',
        justifyContent:'center'
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
    btn1:{
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

export default HomePage;
