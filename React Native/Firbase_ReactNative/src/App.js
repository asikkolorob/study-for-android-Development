import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, ImageBackground,StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import auth from '@react-native-firebase/auth';

import SimpleLineIcons from 'react-native-vector-icons/Feather'

import CreateAdScreen from './screens/CreateAdScreen';
import ListItemScreen from './screens/ListItemScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Signup" component={SignupScreen} 
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#BC9115',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="List" component={ListItemScreen} 
        options={{
          title:'',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <SimpleLineIcons
                name={'home'} size={30}
                color={focused ? '#BC9115' : '#748c94'}
              />
            </View>
          )
        }}
      />
      <Tab.Screen name="CreateAd" component={CreateAdScreen} 
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <SimpleLineIcons
                name={'plus-circle'} size={30}
                color={focused ? '#BC9115' : '#748c94'}
              />
            </View>
          )
        }}
      />
      <Tab.Screen name="Account" component={AccountScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <SimpleLineIcons
                name={'user'} size={30}
                color={focused ? '#BC9115' : '#748c94'}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {

  const [user,setUser] = useState('');

  useEffect(() => {
    auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setUser(userExist)
      }else{
        setUser('')
      }
    })
  },[])

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="#BC9115" barStyle="dark-content" hidden={false} />
      <ImageBackground style={{flex: 1}} source={require('../src/assets/OIP.png')}>
       <Navigation />
      </ImageBackground>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})