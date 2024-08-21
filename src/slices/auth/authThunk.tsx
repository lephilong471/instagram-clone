'use client';

import { loginApi, registerApi } from '@/api/auth/action';
import { removeCookie } from '@/api/session';
import { JWT } from '@/config';
import { store } from '@/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { login, logout } from './authReducer';

export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (
    body: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      return loginApi({
        email: body.email,
        password: body.password
      })
        .then((res: any) => {
          // store.dispatch(login(res.content.id_token));
          if (res.content.success) {
            localStorage.setItem('user', JSON.stringify(res.content.user));
          }
        })
        .catch((error: unknown) => {
          return thunkAPI.rejectWithValue(error);
        });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'logout/logoutUser',
  async (_, thunkAPI) => {
    try {
      removeCookie(JWT);
      thunkAPI.dispatch(logout());
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);

export const registerUser = createAsyncThunk(
  'register/registerUser',
  async (
    body: {
      fullname: string;
      username: string
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      return registerApi({
        fullname: body.fullname,
        username: body.username,
        email: body.email,
        password: body.password
      })
        .then((res: any) => {
          // store.dispatch(login(res.content.id_token));
          if (res.content.success) {
            localStorage.setItem('user', JSON.stringify(res.content.user));
          }
        })
        .catch((error: unknown) => {
          return thunkAPI.rejectWithValue(error);
        });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)
