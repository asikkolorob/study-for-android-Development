import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const SignupScreen = ({ navigation }) => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    return (
        <View style={styles.mainCon}>
            <View style={styles.imgCon}>
                {/*Login Screen Profile Image*/}
                
                <Text style={styles.text}>Please Signup !</Text>
            </View>
            <View style={styles.inputBosCon}>
                {/*Login Form*/}
                <TextInput
                    placeholder='Email'
                    value={email}
                    placeholderTextColor='gray'
                    style={styles.input}
                    onChangeText={text => SetEmail(text)}
                />
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
                    // onPress={() => userSignup()}
                >
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Already have account ?</Text>
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
        justifyContent:'center',
        marginTop:100
    },
    img: {
        height: 205,
        width: 200,
    },
    imgCon: {
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'normal'
    },
    input: {
        margin: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: 'grey',
        height: 50,
        elevation:1
    },
    inputBosCon: {
        height: '60%'
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
        color:'#fff'
    }
})