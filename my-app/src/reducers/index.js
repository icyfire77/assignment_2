import { combineReducers } from 'redux';
import updateForms from "./updateForms";
import updateRecipes from "./updateRecipes";
import recipeReducer from "./serverReducer";
import recipesSlice from "./newServerReducer"

const rootReducer = combineReducers({
    updateForms,
    updateRecipes,
    recipeReducer,
    recipesSlice
});

export default rootReducer;
