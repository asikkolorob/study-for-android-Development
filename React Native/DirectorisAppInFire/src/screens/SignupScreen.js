import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

// import auth from '@react-native-firebase/auth';

const SignupScreen = ({ navigation }) => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    // const userSignup = async () => {
    //     if (!email || !password) {
    //         Alert.alert('please all all the fields');
    //         return
    //     }
    //     try {
    //         await auth().createUserWithEmailAndPassword(email, password)
    //     } catch (err) {
    //         Alert.alert('something went wrong please try different password')
    //     }
    // }

    return (
        <View style={styles.mainCon}>
            <View style={styles.imgCon}>
                {/*Login Screen Profile Image*/}
                <Image style={styles.img} source={require('../assets/processed.png')} />
                <Text style={styles.text}>Please Signup !</Text>
            </View>
            <View style={styles.inputBosCon}>
                {/*Login Form*/}
                <TextInput
                    placeholder='Email'
                    // value={email}
                    placeholderTextColor='gray'
                    style={styles.input}
                    onChangeText={text => SetEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    // value={password}
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
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Already have an account, Login ? </Text>
                </TouchableOpacity>
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
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'normal'
    },
    input: {
        margin: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 13,
        borderColor: '#BC9115',
        height: 50
    },
    inputBosCon: {
        height: '60%'
    },
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