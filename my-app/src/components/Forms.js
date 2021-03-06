import {useSelector, useDispatch} from 'react-redux';
import {} from '../actions/index.js'
// uses code from following sources:
// https://stackoverflow.com/questions/69769443/getting-text-input-value-with-redux-in-a-react-app

export default function Forms() {

    const dispatch = useDispatch()

    const inputValue = useSelector(state => state.value)

    const handleChange = (e) => {
      dispatch({type: "CHANGE_INPUT_VALUE",
        payload: [e.target.name, e.target.value] })
    }

  return (
    <div>
      <p id="afterRecipe" className="generalText">Add your own recipe below:</p>
        <div className="center">
          <textarea className="boxes" name="title" value={inputValue} onChange={handleChange}
            rows="1" cols="80"
            placeholder="Add your recipe title here!">
            </textarea>
        </div>
        <div className="center">
          <textarea className="boxes" name="duration" value={inputValue} onChange={handleChange}
            rows="1" cols="80"
            placeholder="Add recipe duration here">
            </textarea>
        </div>
        <div className="center">
          <textarea className="boxes" name="ingredients" value={inputValue} onChange={handleChange}
            rows="8" cols="80"
            placeholder="Add your recipe ingredients here">
          </textarea>
        </div>
        <div className="center">
          <textarea className="boxes" name="instructions" value={inputValue} onChange={handleChange}
            rows="12" cols="80"
            placeholder="Add your recipe instructions here">
          </textarea>
        </div>
    </div>
  );
}
