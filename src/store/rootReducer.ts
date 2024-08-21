import AuthReducer from '@/slices/auth/authReducer';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducerName = {
  auth: 'auth'
};

export const rootReducer = combineReducers({
  [rootReducerName.auth]: AuthReducer.reducer
});
