import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { fetchRecipes } from "../actions/index.js";
import { useEffect } from 'react';
import { getRecipesAsync, deleteRecipeAsync, editRecipeAsync } from '../thunks/thunks.js';
import MoreInfo from "./MoreInfo.js"
import { recipeCaller, addRecipe, delRecipes } from '../actions/index.js'
import {getForms} from "../index.js"

export default function AsyncRecipeList() {

  const recipes = useSelector(state => state.recipesSlice.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, []);

  return (
    <div>
      {recipes.map(({ _id, title, ingredients, duration, instructions }) => (
        <>
        <h3 key={title}>{title}</h3>
        <h5 key={ingredients}>{ingredients}</h5>
        <p key={duration}>{duration}</p>
        <MoreInfo
          instructions = {instructions}
        />
        <button key="deleteOne"
        onClick={() => dispatch(deleteRecipeAsync({"_id": _id}))}>Delete Current Recipe</button>
        <button key="editOne"
        onClick={() => dispatch(editRecipeAsync({"new": getForms(), "old": _id}))}>Edit Current Recipe</button>
        </>
      ))}
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
