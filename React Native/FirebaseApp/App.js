import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View ,ActivityIndicator} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather';

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import Home from './src/screens/main/Home';
import CreacteBlog from './src/screens/main/CreacteBlog';
import Blog from './src/screens/main/Blog';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [loggedIn,setLoggedIn] = useState(false)
  const [loading,setLoading] = useState(false)

  if (loading) {
    return(
      <ActivityIndicator 
        size={32}
        color='#000'
      />
    )
  }

  if (!loggedIn) {
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Login' component={Login} />
          <Tab.Screen name='Register' component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CreacteBlog' component={CreacteBlog} />
        <Stack.Screen name='Blog' component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({})
