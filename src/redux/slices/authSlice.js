import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/operations';

const beginningState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: beginningState,
  extraReducers(builder) {
    builder
      .addCase(authOperations.registration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logout.fulfilled, state => {
        state.user = { name: '', email: '' };
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(authOperations.refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperations.refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
