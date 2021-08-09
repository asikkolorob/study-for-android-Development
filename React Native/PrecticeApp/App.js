import React, {useEffect,useState} from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import auth from '@react-native-firebase/auth';

import Login from './src/LoginFirebaseFunctionality/Login';
import HomePage from './src/LoginFirebaseFunctionality/HomePage';
import FirebaseStore from './src/LoginFirebaseFunctionality/FirebaseStore';
import CreacteAds from './src/LoginFirebaseFunctionality/CreacteAds';


const RootStack = createStackNavigator();
const MainStack = createStackNavigator();
const FireStoreStack = createStackNavigator();

const RootStackScreen = () => {
  return(
    <RootStack.Navigator>
      <RootStack.Screen name="Login" component={Login}
        options={{
          headerShown: false
        }}
        />
    </RootStack.Navigator>
  )
}

const MainScreen = () => {
  return(
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomePage}
        options={{
          headerShown: false
        }}
        />
      <MainStack.Screen name="FireStore" component={FireStoreScreen}
        options={{
          headerShown: false
        }}
      />
    </MainStack.Navigator>
  )
}

const FireStoreScreen = () => {
  return(
    <FireStoreStack.Navigator>
      <FireStoreStack.Screen name='FireStore' component={FirebaseStore} />
      <FireStoreStack.Screen name='CreactAds' component={CreacteAds} />
    </FireStoreStack.Navigator>
  )
}

const Navigation = () => {

  const [user,setUser] = useState('')

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setUser(userExist)
      }else{
        setUser('')
      }
    })
    return unsubscribe
  }, [])

  return(
    <NavigationContainer>
      {user ? <MainScreen/> : <RootStackScreen/> }
    </NavigationContainer>
  )
}

const App = () => {
  return (
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  )
}
    

export default App;
