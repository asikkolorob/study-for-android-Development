import React, {useState,useEffect} from 'react';
import { StyleSheet, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainTabsScreen from './MainTabScreen';
import RootStackScreen from './RootStackScreen';
import auth from '@react-native-firebase/auth';

const Navigation = () => {

  const [user, setUser] = useState('')

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((userExist) => {
      if (userExist) {
        setUser(userExist)
      } else {
        setUser('')
      }
    })
    return unsubscribe
  }, [])

  return (
    <NavigationContainer>
      {user ? <MainTabsScreen /> : <RootStackScreen />}
    </NavigationContainer>
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