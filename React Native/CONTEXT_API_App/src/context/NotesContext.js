import React, {createContext, useReducer} from 'react';
import { Text, View } from 'react-native';
import { reducer, initialState} from '../reducer/NotesReducer';

 export const NotesContext = createContext()


 export const NotesProvider = ({children}) => {
     const [state, dispatch] = useReducer(reducer, initialState)
     return (
         <NotesContext.Provider value={{state,dispatch}}>
            {children}
         </NotesContext.Provider>
     )
 }




