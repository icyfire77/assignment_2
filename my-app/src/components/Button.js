import React, {useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { addRecipe, changeInputValue, addTodo } from '../actions/index.js'
// uses code from following sources:
// https://stackoverflow.com/questions/69769443/getting-text-input-value-with-redux-in-a-react-app

const mapStateToProps = (state) => ({
  value: state.value,
})

export default function Button(mapStateToProps) {

    const dispatch = useDispatch()

    const inputValue = useSelector(state => state.value)

    const handleChange = (e) => {
      dispatch({type: "CHANGE_INPUT_VALUE", payload: e.target.value})
    }

  return (
    <div>
      <div>
        <input type='text'/>
      </div>
      <p id="afterRecipe" className="generalText">Add your own recipe below:</p>
        <div className="center">
          <textarea className="boxes" name="name" value={inputValue} onChange={handleChange}
            rows="1" cols="80"
            placeholder="Add your recipe title here!">
            </textarea>
        </div>
        <div className="center">
          <textarea className="boxes" name="name" value={inputValue} onChange={handleChange}
            rows="8" cols="80"
            placeholder="Add your recipe ingredients here">
          </textarea>
        </div>
        <div className="center">
          <textarea className="boxes" name="name" value={inputValue} onChange={handleChange}
            rows="12" cols="80"
            placeholder="Add your recipe instructions here">
          </textarea>
        </div>
      <button onClick={() => dispatch(addRecipe(inputValue))}>Add Recipe!</button>
      <p>test{inputValue}</p>
    </div>
  );
}
