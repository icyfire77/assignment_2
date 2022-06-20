import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import UserService from './service';

export const getRecipesAsync = createAsyncThunk(
  actionTypes.GET_RECIPES,
  async () => {
    return await UserService.getUsers();
  }
);

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    extraReducers: {
      [getUsers.pending] = (state) => {
        state.status = 'Pending';
      },

      [getUsers.fulfilled] = (state, action) => {
        state.status = 'Fulfilled';
        state.data = action.payload;
      },

      [getUsers.rejected] = (state) => {
        state.status = 'Rejected';
      }
    }
})
