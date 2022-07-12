import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../thunks/utils';
import { getRecipesAsync, addRecipeAsync, deleteRecipeAsync, editRecipeAsync } from '../thunks/thunks';

const INITIAL_STATE = {
  list: [],
  getRecipes: REQUEST_STATE.IDLE,
  addRecipe: REQUEST_STATE.IDLE,
  error: null
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipesAsync.pending, (state) => {
        state.getRecipes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getRecipesAsync.fulfilled, (state, action) => {
        state.getRecipes = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getRecipesAsync.rejected, (state, action) => {
        state.getRecipes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(addRecipeAsync.pending, (state) => {
        state.addRecipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.addRecipe = REQUEST_STATE.FULFILLED;
        state.list.push(action.payload);
      })
      .addCase(addRecipeAsync.rejected, (state, action) => {
        state.addRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(deleteRecipeAsync.pending, (state) => {
        state.addRecipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
        state.addRecipe = REQUEST_STATE.FULFILLED;
        state.list = state.list.filter(function(jsonObject) {
          return jsonObject._id !== action.payload._id;
        });
      })
      .addCase(deleteRecipeAsync.rejected, (state, action) => {
        state.addRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(editRecipeAsync.pending, (state) => {
        state.addRecipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editRecipeAsync.fulfilled, (state, action) => {
        state.addRecipe = REQUEST_STATE.FULFILLED;
        console.log(action.payload);
        for (const jsonObject of state.list) {
          if (jsonObject._id === action.payload.old) {
            jsonObject.title = action.payload.new.title
            jsonObject.ingredients = action.payload.new.ingredients
            jsonObject.instructions = action.payload.new.instructions
          }
        }
      })
      .addCase(editRecipeAsync.rejected, (state, action) => {
        state.addRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default recipesSlice.reducer;
