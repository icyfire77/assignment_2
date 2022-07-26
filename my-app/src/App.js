import logo from './logo.svg';
import './App.css';
import Forms from "./components/Forms";
import Button from "./components/Button";
import Recipes from "./components/Recipes";
import AsyncRecipeList from "./components/ListComponent";
import {getForms} from "./index.js"
import { recipeCaller } from './actions/index.js'

let initialRecipe = {
  "title": "Grilled Cheese Sandwiches",
  "duration": "20 min",
  "ingredients": "4 slices white bread; 3 tablespoons butter, divided; 2 slices Cheddar cheese",
  "instructions": "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}

const recipePromise = () => {
  const requested = fetch('https://dry-everglades-42811.herokuapp.com/recipes')
      .then(result => result.json())
      .then(data => {
        return data;
      });
  return requested;
}

export const recipeRequest = () => {
  recipePromise().then((data) => {
    // console.log(data)
    return data;
  });
};

let recipeState = JSON.stringify(recipeRequest());

// returns a new object with the values at each key mapped using mapFn(value)
// taken from https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

function reworkStructure(recipeObject) {
  // may be used again later
}

function addRecipe() {
  let currentInputs = getForms();
  // console.log(currentInputs);
  // objectMap(currentInputs, reworkStructure)

  /*
  let newStructure = {
    [currentInputs.title]: {
      "ingredients": currentInputs.ingredients,
      "instructions": currentInputs.instructions
    }
  }
  */

  recipeState.push(currentInputs);
  // console.log(recipeState)
}

function deleteRecipes() {
  recipeState.length = 0;
}

//recipeState.forEach()

/*
let renderedRecipes = recipeState.map(item =>
  <div> {Object.keys(item)[0]} </div>
)
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
          {/*
            <Recipes
            recipeList = {recipeState}/>
            {renderedRecipes}
            */}
          </div>
          <Forms/>
          <div>
            <Button
              recipeList = {recipeRequest()}
            />
            <Recipes/>
            <AsyncRecipeList/>
            {/*<button onClick={addRecipe}>Add Recipe!</button>*/}
          </div>
      </header>
    </div>
  );
}

export default App;
