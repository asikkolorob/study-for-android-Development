import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import {SignupStyles } from '../style/Styles';


const SignupScreen = ({ navigation }) => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');

    const _Signup = async () => {
        if (!email || !password) {
            alert('plaese all all the felds')
            return
        }
        try {
            await auth().createUserWithEmailAndPassword(email, password)
        } catch (error) {
            alert('Sumthing wrong please try Again')
        }

    }

    return (
        <View style={SignupStyles.mainCon}>
            <View style={{ marginVertical: 20, marginHorizontal: 20, marginTop: 100 }}>
                <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Welcome to Directorist</Text>
                <Text style={{ fontSize: 16,color:'grey' }}>Get Started in less than 30 secont</Text>
            </View>
            <View style={SignupStyles.inputBosCon}>
                {/*Login Form*/}
                <TextInput
                    placeholder='Email'
                    value={email}
                    placeholderTextColor='gray'
                    style={SignupStyles.input}
                    onChangeText={(userEmail) => SetEmail(userEmail)}
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    placeholderTextColor='gray'
                    style={SignupStyles.input}
                    secureTextEntry={true}
                    onChangeText={(userPassword) => SetPassword(userPassword)}
                />
                <TouchableOpacity
                    style={SignupStyles.btn}
                    onPress={() => _Signup()}
                >
                    <Text style={SignupStyles.btnText}>Signup</Text>
                </TouchableOpacity>
                
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop:400 }}>
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
    
})