import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather';

import auth from '@react-native-firebase/auth';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CreateAdScreen from './screens/CreateAdScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          headerShown:false
        }}/>
      <Stack.Screen name="Signup" component={SignupScreen} 
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name={'home'} size={30}
                color={focused ? '#000' : '#748c94'}
              />
            </View>
          )
        }}/>
      <Tab.Screen name="CreactAd" component={CreateAdScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name={'plus-circle'} size={30}
                color={focused ? '#000' : '#748c94'}
              />
            </View>
          )
        }}
      />
      <Tab.Screen name="Acconut" component={AccountScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name={'user'} size={30}
                color={focused ? '#000' : '#748c94'}
              />
            </View>
          )
        }} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  const user = 'fbdfhdfh'
  // useEffect(() => {

  // },[])
  return(
    <NavigationContainer>
      {user ? <TabNavigator/> : <AuthNavigator/>}
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' hidden={false} />
      <Navigation/>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})
