import { combineReducers } from 'redux';
import updateForms from "./updateForms";
import updateRecipes from "./updateRecipes";
import recipeReducer from "./serverReducer";

const rootReducer = combineReducers({
    updateForms,
    updateRecipes,
    recipeReducer
});

export default rootReducer;
