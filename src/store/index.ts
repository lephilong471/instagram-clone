'use client';

import { configureStore } from '@reduxjs/toolkit';
import { useSelector as useReduxSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import { thunk, ThunkAction } from 'redux-thunk';

import CustomStorage from './CustomStorage';
import { rootReducer } from './rootReducer';

import type { TypedUseSelectorHook } from 'react-redux';
import type { Action } from '@reduxjs/toolkit';
const persistConfig = {
  key: 'nextjs',
  storage: CustomStorage
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
