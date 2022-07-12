// TODO: add creator parameter to below initialRecipe structure

let initialRecipe = JSON.stringify(
{
  "title": "Grilled Cheese Sandwiches",
  "ingredients": "4 slices white bread; 3 tablespoons butter, divided; 2 slices Cheddar cheese",
  "instructions": "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
});

const initialState = JSON.parse(initialRecipe);

const updateForms = (amount=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      // console.log(action.payload)

      let temp = JSON.parse(JSON.stringify(amount))
      for (const [key, value] of Object.entries(temp)) {
        if (action.payload[0] === key) {
          temp[key] = action.payload[1];
        }
      }
      return temp;

    default:
     return amount;
  }
}

export default updateForms;
