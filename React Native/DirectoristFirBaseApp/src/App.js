import React from 'react';
import { StyleSheet, View ,StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import AllListings from './screens/AllListings';
import Location from './screens/Location';

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
      <Tab.Screen name="AllList" component={AllListings} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name={'search'} size={30}
                color={focused ? '#000' : '#748c94'}
              />
            </View>
          )
        }}
      />
      <Tab.Screen name="Location" component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <SimpleLineIcons
                name={'compass'} size={30}
                color={focused ? '#000' : '#748c94'}
              />
            </View>
          )
        }}
      />
      <Tab.Screen name="Acconut" component={AccountScreen}
        options={{
          headerTitle:'My Account',
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
  const user = 'gvjjhjhvjh'
  
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
