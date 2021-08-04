import React from 'react';
import { StyleSheet, View ,StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MainTabsScreen from './MainTabScreen';

const Navigation = () => {
  
  return(
    <NavigationContainer>
      <MainTabsScreen />
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
