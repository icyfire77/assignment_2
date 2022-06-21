import {recipeCaller} from "../actions/index"
import {recipeRequest} from "../App"

const updateRecipes = (state = [], action) => {
	switch(action.type) {
        case "ADD_RECIPE":
          // console.log(action.payload[0]);
          let clonedState = JSON.parse(JSON.stringify(state));
          clonedState.push(action.payload[0]);
          fetch('http://localhost:3001/recipes', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(action.payload[0])
          });
          return clonedState;
        case "DEL_RECIPE":
          let freshState = [];
          return freshState;
				case "DEL_ONE":
					fetch('http://localhost:3001/recipes', {
						method: 'DELETE',
						headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
						body: action.payload
					});
					console.log(action.payload);
					return state;
		default:
			return state;
	}
};

export default updateRecipes;
