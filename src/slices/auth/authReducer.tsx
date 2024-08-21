import { PATH } from '@/config/router/routerConfig';
import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import router from 'next/router';

export interface authState {
  user: any | null;
  token: string;
}

const initialState: authState = {
  user:
    typeof window !== 'undefined' ? localStorage.getItem('user') || null : null,
  token:
    typeof window !== 'undefined' ? localStorage.getItem('token') || '' : ''
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    logout: state => {
      state.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push(PATH.SIGNIN);
    }
  }
});
export const { login, logout } = authSlice.actions;
export default authSlice;
