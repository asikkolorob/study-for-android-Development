import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import CreateAdScreen from './screens/CreateAdScreen';
import ListItemScreen from './screens/ListItemScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const App = () => {
  return (
    <View style={{flex:1}}>
      <ImageBackground 
        style={{flex: 1,justifyContent: "center"}}
        source={require('../src/assets/OIP.png')}
      >
        {/* <LoginScreen /> */}
        {/* <SignupScreen /> */}
        {/* {<CreateAdScreen />} */}
        <ListItemScreen />
      </ImageBackground>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({})
