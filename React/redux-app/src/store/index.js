/**
 * create store
 */
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import UserReducer from './reducers/UserReducer';

export default configureStore({
    reducer: UserReducer,
    middleware: [...getDefaultMiddleware()],
})