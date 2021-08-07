import React, { Component } from 'react';
import { View } from 'react-native';

import Login from './src/LoginFunctionality/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/LoginFunctionality/HomePage';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} 
            options={{
              headerShown:false
            }}
          />
          <Stack.Screen name="Home" component={HomePage}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
