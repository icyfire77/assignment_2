const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001

app.use(cors());
app.use(bodyParser.json());

let initialRecipe = [{
  "title": "Grilled Cheese Sandwiches",
  "ingredients": "4 slices white bread; 3 tablespoons butter, divided; 2 slices Cheddar cheese",
  "instructions": "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}]

// baseline taken from https://rapidapi.com/blog/create-react-app-express/

app.get('/recipes', (req, res) => {
  // console.log("reached GET recipes")
  res.send(initialRecipe)
})

app.post('/recipes', function(req, res) {
  let addedRecipe = req.body;
  // console.log(addedRecipe);
  initialRecipe.push(addedRecipe);
  res.send(addedRecipe);
});

app.delete('/recipes', function(req, res) {
  // console.log(req.body);
  let recipeToDelete = req.body;
  initialRecipe = initialRecipe.filter(function(jsonObject) {
    return jsonObject.title != recipeToDelete.title;
  });
  return res.send(recipeToDelete);
});

app.put('/recipes', function(req, res) {
  console.log(req.body);
  /*
  let recipeToDelete = req.body;
  initialRecipe = initialRecipe.filter(function(jsonObject) {
    return jsonObject.title != recipeToDelete.title;
  });
  return res.send(recipeToDelete);
  */
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
