import {useSelector, useDispatch} from 'react-redux';
// import { increment } from '../actions/index.js'

// deprecated for now, may return to later

export default function Recipes({recipeList}) {
    const count = useSelector(state => state.buttonCount);

    const dispatch = useDispatch()

  return (
    <div>
    /*
      <h1>I want {count} scoops of ice cream!</h1>
      <button onClick={() => dispatch()}>More!</button>
    */
    </div>
  );
}
