import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// POST @ /tasks
export const addTask = createAsyncThunk(
  'tasks/addTasks',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/tasks', { text });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
  'tasks/deleteTasks',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/taska/${taskId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
