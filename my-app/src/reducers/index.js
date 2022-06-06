import { combineReducers } from 'redux';
import updateForms from "./updateForms";
import updateRecipes from "./updateRecipes"

const rootReducer = combineReducers({
    updateForms,
    updateRecipes
});

export default rootReducer;
