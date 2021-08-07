import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import SimpleLineIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoginStyles } from '../style/Styles';
import Users from '../config/Users';
import { AuthContext } from './components/Context';

export class LoginTest extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            isValidUser:true,
            isValidPassword:true
        }
    }
    render() {
        return (
            <View>
                
            </View>
        )
    }
}

export default LoginTest;
