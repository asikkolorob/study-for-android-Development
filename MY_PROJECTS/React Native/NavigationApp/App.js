//rnfes

// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} 
          options={{headerShown:false}}
        />
        <Stack.Screen name="QuizScreen" component={Quiz} 
          options={{headerShown:false}}
        />
        <Stack.Screen name="ResultScreen" component={Result} 
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

