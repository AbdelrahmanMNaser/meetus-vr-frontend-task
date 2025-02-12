import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: !!Cookies.get('token'),
    loading: false,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.userInfo;
      state.isAuthenticated = true;
      state.error = null;
      
      Cookies.set('token', action.payload.token, { 
        expires: 7, 
        secure: true,
        sameSite: 'strict'
      });
      Cookies.set('refresh', action.payload.refresh, { 
        expires: 7, 
        secure: true,
        sameSite: 'strict'
      });
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      Cookies.remove('token');
      Cookies.remove('refresh');
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { loginSuccess, logout, setError, setLoading } = authSlice.actions;
export default authSlice.reducer;