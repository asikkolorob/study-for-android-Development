import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SimpleLineIcons from 'react-native-vector-icons/Feather'

import CreateAdScreen from './screens/CreateAdScreen';
import ListItemScreen from './screens/ListItemScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'List') {
            iconName = 'home'
          } else if (route.name = 'CreacteAd') {
            iconName = 'plus-circle'
          }

          // You can return any component that you like here!
          return <SimpleLineIcons name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="List" component={ListItemScreen} />
      <Tab.Screen name="CreateAd" component={CreateAdScreen} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  const user = 'Ashik'
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex: 1}} source={require('../src/assets/OIP.png')}>
       <Navigation />
      </ImageBackground>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})
