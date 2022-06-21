import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { fetchRecipes } from "../actions/index.js";
import { useEffect } from 'react';
import { getRecipesAsync, deleteRecipeAsync } from '../thunks/thunks.js';
import MoreInfo from "./MoreInfo.js"
import { recipeCaller, addRecipe, delRecipes, deleteOne } from '../actions/index.js'

export default function AsyncRecipeList() {

  const recipes = useSelector(state => state.recipesSlice.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, []);

  return (
    <div>
      {recipes.map(({ title, ingredients, instructions }) => (
        <>
        <h3 key={title}>{title}</h3>
        <h5 key={ingredients}>{ingredients}</h5>
        <MoreInfo
          instructions = {instructions}
        />
        <button key="deleteOne"
        onClick={() => dispatch(deleteRecipeAsync({"title": title}))}>Delete Current Recipe</button>
        </>
      ))}
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
