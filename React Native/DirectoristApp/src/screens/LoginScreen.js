import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import auth from '@react-native-firebase/auth';

import { LoginStyles } from '../style/Styles';


const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const _Login = async () => {
        if (!email || !password) {
            alert('plaese all all the felds')
            return
        }
        try {
            await auth().signInWithEmailAndPassword(email, password)
        } catch (error) {
            alert('Sumthing wrong please try Again')
        }

    }

    return (
        <View style={LoginStyles.mainCon}>
            <View style={LoginStyles.imgCon}>
                <TouchableOpacity>
                    <Text style={LoginStyles.text}>Skip Now</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:20,marginHorizontal:20,marginTop:100}}>
                <Text style={{fontSize:35,fontWeight:'bold'}}>Hey there</Text>
                <Text style={{fontSize:16,}}>It's good to see you</Text>
            </View>
            <View style={LoginStyles.inputBosCon}>
                {/*Login Form*/}
                <TextInput
                    placeholder='Email'
                    value={email}
                    placeholderTextColor='gray'
                    style={LoginStyles.input}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    
                />
                <TextInput
                    placeholder='Password'
                    value={password}
                    placeholderTextColor='gray'
                    style={LoginStyles.input}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    
                />
                <TouchableOpacity
                    style={LoginStyles.btn}
                    onPress={() => _Login()}
                >
                    <Text style={LoginStyles.btnText}>Login</Text>
                </TouchableOpacity>
                <View style={{marginVertical:50,}}>
                    <TouchableOpacity
                        style={LoginStyles.btnFac}
                        // onPress={() => userLogin()}
                    >
                        <View style={{flexDirection:'row'}}>
                            <SimpleLineIcons
                                name='facebook'
                                color='#023e8a'
                                size={32}
                            />
                            <View style={{justifyContent:'center',marginLeft:100}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Continue with Facebook</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={LoginStyles.btnFac}
                        // onPress={() => googleLogin()}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <SimpleLineIcons
                                name='google'
                                color='#e63946'
                                size={32}
                            />
                            <View style={{ justifyContent: 'center', marginLeft: 100 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Continue with Google</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account ?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ textAlign: 'center', marginTop: 20,marginLeft:5,fontSize:16,fontWeight:'bold' }}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
   
})