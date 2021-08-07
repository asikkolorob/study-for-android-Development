import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginStyles } from '../style/Styles';
import Users from '../config/Users';
import { AuthContext } from './components/Context';

const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValidUser, setIsValidUser] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const { signIn } = React.useContext(AuthContext)

    const lodingHandle = (userName,password) => {
        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if (username.length == 0 || password.length == 0) {
            Alert.alert('Wrong Input', 'username or password field cannot be empty', [
                { text: 'Okay' }
            ]);
            return;
        }

        if(foundUser.length == 0){
            Alert.alert('Invalid User','username or password is incorrect',[
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    const handleValidUser = (username) => {
        if( username.trim().length >= 4 ){
            setIsValidUser(true);
        }else{
            setIsValidUser(false);
        }
    }

    const handleValidPassword = (password) => {
        if (password.trim().length >= 8) {
            setIsValidPassword(true);
        } else {
            setIsValidPassword(false);
        }
    }

    return (
        <View style={LoginStyles.mainCon}>
            <View style={LoginStyles.imgCon}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={LoginStyles.text}>Skip Now</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:20,marginHorizontal:20,marginTop:100}}>
                <Text style={{fontSize:35,fontWeight:'bold'}}>Hey there</Text>
                <Text style={{fontSize:16,}}>It's good to see you</Text>
            </View>
            <View style={LoginStyles.inputBosCon}>
                {/*Login Form*/}
                <Text style={{fontWeight:'bold',marginLeft:23,fontSize:17}}>Email address</Text>
                <TextInput
                    placeholder='Email'
                    value={username}
                    placeholderTextColor='gray'
                    style={LoginStyles.input}
                    onChangeText={text => setUsername(text)}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                />
                { isValidUser ? null :
                    <View>
                        <Text style={{marginBottom:16,marginHorizontal:20,color:'red'}}>userName must be 4 characters long.</Text>
                    </View>
                }
                <Text style={{ fontWeight: 'bold', marginLeft: 23, fontSize: 17 }}>Password</Text>
                <TextInput
                    placeholder='Password'
                    value={password}
                    placeholderTextColor='gray'
                    style={LoginStyles.input}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
                />
                { isValidPassword ? null : 
                    <View>
                        <Text style={{ marginBottom: 16, marginHorizontal: 20, color: 'red' }}>Password must be 8 characters long.</Text>
                    </View>
                }
                
                <TouchableOpacity
                    style={LoginStyles.btn}
                    onPress={() => { lodingHandle(username, password) }}
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