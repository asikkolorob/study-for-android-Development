import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SplashScreen from './screens/SplashScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {

    return(
        <RootStack.Navigator initialRouteName='Splash'>
            <RootStack.Screen name='Splash' component={SplashScreen}
                options={{
                    headerShown: false
                }}
            />
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
