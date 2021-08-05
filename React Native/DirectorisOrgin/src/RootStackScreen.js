import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const RootStack = createStackNavigator();


const RootStackScreen = ({navigation}) => {
    return(
        <RootStack.Navigator>
            <RootStack.Screen name='Login' component={LoginScreen} 
                options={{
                    headerShown:false
                }}
            />
            <RootStack.Screen name='Signup' component={SignupScreen} 
                options={{
                    headerShown:false
                }}
            />
        </RootStack.Navigator>
    );
}

export default RootStackScreen;
