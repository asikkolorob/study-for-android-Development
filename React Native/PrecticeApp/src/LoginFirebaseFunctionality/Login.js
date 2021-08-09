import React, { useState } from 'react';
import { Text, View ,StyleSheet, TextInput,TouchableOpacity,AsyncStorage} from 'react-native';

import auth from '@react-native-firebase/auth';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const _Signup =  async() => {
        if (!username || !password){
            alert('plaese all all the felds')
            return
        }
        try {
            await auth().createUserWithEmailAndPassword(username, password)
        } catch (error) {
            alert('Sumthing wrong please try Again')
        }
       
    }

    const _Login = async () => {
        if (!username || !password) {
            alert('plaese all all the felds')
            return
        }
        try {
            await auth().signInWithEmailAndPassword(username, password)
        } catch (error) {
            alert('Sumthing wrong please try Again')
        }

    }

    return (
        <View style={styles.container}>

            <View style={{marginTop:300}}>
                <Text style={{fontSize:40,color:'#fff',textAlign:'center'}}>Firebase Login Authenticetion</Text>
                <TextInput
                    placeholder='User Name'
                    placeholderTextColor='#000'
                    style={styles.input}
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='#000'
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>
                
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => _Login()}

                            
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => _Signup()}
                    >
                        <Text style={styles.btnText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        backgroundColor: '#14f'
    },
    input: {
        margin: 20,
        height:70,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: 'grey',
        color: '#000',
        backgroundColor:'#fff',
        elevation: 1,
        fontSize:18
    },
    btn: {
        backgroundColor: '#f9fb35',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 20,
        marginTop: 30,
        height:60,
        width:160,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#000'

    },
})



