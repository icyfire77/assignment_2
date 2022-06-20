import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from "../actions/index.js";
import { useEffect } from 'react';
// import { getUsers } from './store/slices/usersSlice';

export default function Button(recipeList) {

  const dispatch = useDispatch();
  const usersData = useSelector(state => state.usersSlice.data);
  const usersDataStatus = useSelector(state => state.usersSlice.status);

  useEffect(() => {
    // dispatch(getUsers());
  }, []);

  return (
    <div>
    </div>
  );
}
