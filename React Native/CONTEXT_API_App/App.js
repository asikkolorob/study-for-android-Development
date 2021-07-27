import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ListNotesScreen from './src/screens/ListNotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ShowNoteScreen from './src/screens/ShowNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';

import { NotesProvider } from './src/context/NotesContext';

const Stack = createStackNavigator();

const defaultStyles = {
  headerStyle: {
    backgroundColor: '#e29578',
  },
  headerTintColor: '#000',
};

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notes" component={ListNotesScreen} options={{
          headerTitleAlign:'center',
          title:'All Notes',
          ...defaultStyles
        }}/>
        <Stack.Screen name="Create" component={CreateNoteScreen} options={{
          headerTitleAlign: 'center',
          title: 'Create Note',
          ...defaultStyles
        }} />
        <Stack.Screen name="ShowNote" component={ShowNoteScreen} options={{
          headerTitleAlign: 'center',
          title: 'Note',
          ...defaultStyles
        }} />
        <Stack.Screen name="EditNote" component={EditNoteScreen} options={{
          headerTitleAlign: 'center',
          title: 'Update Note',
          ...defaultStyles
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