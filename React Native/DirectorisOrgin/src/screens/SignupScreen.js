import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from './components/Context';

const SignupScreen = ({ navigation }) => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    

    return (
        <View style={styles.mainCon}>
            <View style={styles.imgCon}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text}>Skip Now</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginVertical: 20, marginHorizontal: 20, marginTop: 100 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Hey there</Text>
                <Text style={{ fontSize: 16, }}>It's good to see you</Text>
            </View>
            <View style={styles.inputBosCon}>
                {/*Login Form*/}
                <Text style={{ fontWeight: 'bold', marginLeft: 23, fontSize: 17 }}>Email address</Text>
                <TextInput
                    placeholder='Email'
                    value={email}
                    placeholderTextColor='gray'
                    style={styles.input}
                    onChangeText={text => SetEmail(text)}
                />
                <Text style={{ fontWeight: 'bold', marginLeft: 23, fontSize: 17 }}>Password</Text>
                <TextInput
                    placeholder='Password'
                    value={password}
                    placeholderTextColor='gray'
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={text => SetPassword(text)}
                />
                <TouchableOpacity
                    style={styles.btn}
                    // onPress={() => { signIn()}}
                >
                    <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 50, }}>
                    <TouchableOpacity
                        style={styles.btnFac}
                    // onPress={() => userLogin()}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <SimpleLineIcons
                                name='facebook'
                                color='#023e8a'
                                size={32}
                            />
                            <View style={{ justifyContent: 'center', marginLeft: 100 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Continue with Facebook</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnFac}
                    // onPress={() => userLogin()}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <SimpleLineIcons
                                name='google'
                                color='#e63946'
                                size={32}
                            />
                            <View style={{ justifyContent: 'center', marginLeft: 100 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Continue with Facebook</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>I have Already Accounr ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{ textAlign: 'center', marginTop: 20, marginLeft: 5, fontSize: 16, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create({
    mainCon: {
    },
    img: {
        height: 205,
        width: 200,
    },
    imgCon: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop: 5
    },
    text: {
        fontSize: 20,
    },
    input: {
        margin: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: 'grey',
        height: 50,
        color: '#000',
        elevation: 1
    },
    inputBosCon: {
        height: '60%',
    },
    btn: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 30,
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'

    },
    btnFac: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 12,
        marginHorizontal: 30,
        marginTop: 30,
        elevation: 1
    }
})