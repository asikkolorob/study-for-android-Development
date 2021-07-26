import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListNotesScreen from './src/screens/ListNotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ShowNoteScreen from './src/screens/ShowNoteScreen';

import { NotesProvider } from './src/context/NotesContext';

const Stack = createStackNavigator();

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={ListNotesScreen} options={{
          headerTitleAlign:'center',
          title:'All Notes'
        }}/>
        <Stack.Screen name="Create" component={CreateNoteScreen} options={{
          headerTitleAlign: 'center',
          title: 'Create Note'
        }} />
        <Stack.Screen name="ShowNote" component={ShowNoteScreen} options={{
          headerTitleAlign: 'center',
          title: 'Note'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  )
}