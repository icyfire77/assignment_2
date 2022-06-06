import {useSelector, useDispatch} from 'react-redux';
import { addRecipe, delRecipe } from '../actions/index.js'
import {getForms} from "../index.js"
import MoreInfo from "./MoreInfo.js"

// partially taken from
// https://atomizedobjects.com/blog/react/how-to-render-an-array-of-objects-with-map-in-react/#:~:text=To%20render%20an%20array%20of%20objects%20in%20react%20with%20JSX,Instead%2C%20by%20using%20Array.

export default function Button(recipeList) {
  const dynamicRecipes = useSelector(state => state.updateRecipes);

    const dispatch = useDispatch()

  return (
    <div>
      {console.log(dynamicRecipes)}
      {dynamicRecipes.map(({ title, ingredients, instructions }) => (
        <>
        <h3 key={title}>{title}</h3>
        <h5 key={ingredients}>{ingredients}</h5>
        <MoreInfo
          instructions = {instructions}
        />
        </>
      ))}
      <button onClick={() => dispatch(addRecipe([getForms()]))}>Add Recipe!</button>
      <button onClick={() => dispatch(delRecipe())}>Delete Recipes</button>
    </div>
  );
}
