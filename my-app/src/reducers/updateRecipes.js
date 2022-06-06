let initialState = [{
  "title": "Grilled Cheese Sandwiches",
  "ingredients": "4 slices white bread; 3 tablespoons butter, divided; 2 slices Cheddar cheese",
  "instructions": "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}];

const updateRecipes = (state = initialState, action) => {
	switch(action.type) {
        case "ADD_RECIPE":
          // console.log(action.payload[0]);
          let clonedState = JSON.parse(JSON.stringify(state));
          // console.log(clonedState);
          clonedState.push(action.payload[0]);
          return clonedState;
        case "DEL_RECIPE":
          let freshState = [];
          return freshState;
		default:
			return state;
	}
};

export default updateRecipes;
