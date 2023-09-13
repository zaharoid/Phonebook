import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'auth/registration',
  async (credentials, ApiThunk) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(ApiThunk.rejectWithValue(error.message));
      return ApiThunk.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, ApiThunk) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return ApiThunk.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, ApiThunk) => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    return data;
  } catch (error) {
    return ApiThunk.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, ApiThunk) => {
    const { auth } = ApiThunk.getState();

    const refreshedToken = auth.token;

    if (!refreshedToken) {
      return ApiThunk.rejectWithValue();
    }
    token.set(refreshedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return ApiThunk.rejectWithValue(error.message);
    }
  }
);
