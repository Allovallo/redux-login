import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://66cb337b4290b1c4f199bc03.mockapi.io/materials';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// POST @ /users/signup
// body: {name, email, password}
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const reponse = await axios.post('/users/signup', credentials);
      // After successful registration add the token to HTTP header
      setAuthHeader(reponse.data.token);
      return reponse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /users/login
// body: {email, password}
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      // After successful login add the token to HTTP header
      setAuthHeader(response.data);
      return response.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /users/logout
// headers: Authorization: Bearer token
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After successful logout remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//GET @ /users/current
//headers: Authorization: Bearer token
export const refreshUser = createAsyncThunk(
  'auth/refresh',

  async (_, thunkAPI) => {
    // Reading token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user(');
    }

    try {
      // If there is a token add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios.get('users/me');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
