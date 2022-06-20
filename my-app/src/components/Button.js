import {useSelector, useDispatch} from 'react-redux';
import { recipeCaller, addRecipe, delRecipes, deleteOne } from '../actions/index.js'
import {getForms} from "../index.js"
import MoreInfo from "./MoreInfo.js"

// partially taken from
// https://atomizedobjects.com/blog/react/how-to-render-an-array-of-objects-with-map-in-react/#:~:text=To%20render%20an%20array%20of%20objects%20in%20react%20with%20JSX,Instead%2C%20by%20using%20Array.

export default function Button(recipeList) {
  const dynamicRecipes = useSelector(state => state.updateRecipes);

  const dispatch = useDispatch()

  return (
    <div>
      {console.log(recipeList)}
      {/*console.log(dynamicRecipes)*/}
      {dynamicRecipes.map(({ title, ingredients, instructions }) => (
        <>
        <button key="deleteOne"
         onClick={() => dispatch(deleteOne(title))}>Delete Current Recipe</button>
        <h3 key={title}>{title}</h3>
        <h5 key={ingredients}>{ingredients}</h5>
        <MoreInfo
          instructions = {instructions}
        />
        </>
      ))}
      <button key="add" onClick={() => dispatch(addRecipe([getForms(), recipeList]))}>Add Recipe!</button>
      <button key="delete" onClick={() => dispatch(delRecipes())}>Delete Recipes</button>
    </div>
  );
}
