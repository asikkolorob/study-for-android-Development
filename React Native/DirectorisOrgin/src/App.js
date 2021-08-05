import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, View, StatusBar ,ActivityIndicator} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from './screens/components/Context';

import AsyncStorage from '@react-native-async-storage/async-storage';

import MainTabsScreen from './MainTabScreen';
import RootStackScreen from './RootStackScreen';

const Navigation = () => {

  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (state, action) => {
    switch (action.type) {
      case 'RECIVE_TOKEN':
        return {
          ...state,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...state,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...state,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState,dispatch] = React.useReducer(loginReducer,initialLoginState);

  const authContext = useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('jvjnjn');
      // setIsLoading(false);
      const userToken = String( foundUser[0].userToken );
      const userName = foundUser[0].userName;

      try {
        userToken = 'hbjb';
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }

      // console.log('user token',userToken)
      dispatch({ type: 'LOGIN',id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT'})
    },
    signUp: () => {
      // setUserToken('jvjnjn');
      // setIsLoading(false);
    }
  }),[]);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token', userToken)
      dispatch({ type: 'REGISTER',token: userToken });
    },1000);
  },[])

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' color='#000' />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { loginState.userToken !== null ? (
          <MainTabsScreen />
        ) : <RootStackScreen/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#fff" barStyle='dark-content' hidden={false} />
      <Navigation />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})