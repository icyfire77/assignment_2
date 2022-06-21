import { createAsyncThunk } from '@reduxjs/toolkit';
// import { actionTypes } from './actionTypes';
import {getRecipe, addRecipe, delRecipe} from './service';

export const getRecipesAsync = createAsyncThunk(
  'recipes/getRecipes',
  async () => {
    return await getRecipe();
  }
);

export const addRecipeAsync = createAsyncThunk(
  'recipes/addRecipe',
  async (recipe) => {
    return await addRecipe(recipe);
  }
);

export const deleteRecipeAsync = createAsyncThunk(
  'recipes/delRecipe',
  async (title) => {
    return await delRecipe(title);
  }
);
