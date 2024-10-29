import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';
export const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
});
