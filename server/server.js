const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

var ObjectID = require('mongodb').ObjectID;

let initialRecipe = [{
  "title": "Grilled Cheese Sandwiches",
  "ingredients": "4 slices white bread; 3 tablespoons butter, divided; 2 slices Cheddar cheese",
  "instructions": "Preheat skillet over medium heat. Generously butter one side of a slice of bread. Place bread butter-side-down onto skillet bottom and add 1 slice of cheese. Butter a second slice of bread on one side and place butter-side-up on top of sandwich. Grill until lightly browned and flip over; continue grilling until cheese is melted. Repeat with remaining 2 slices of bread, butter and slice of cheese."
}]


MongoClient.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lwvta.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('recipe-database')
    const recipeCollection = db.collection('recipes')

    app.get('/recipes', (req, res) => {
      // console.log("reached GET recipes")
      const recipeArray = db.collection('recipes').find().toArray()
        .then(results => {
          // console.log(results)
          res.send(results);
        })
    })

    app.post('/recipes', function(req, res) {
      let addedRecipe = req.body;
      // console.log(addedRecipe);
      // initialRecipe.push(addedRecipe);
      recipeCollection.insertOne(addedRecipe);
      res.send(addedRecipe);
    });

    app.delete('/recipes', function(req, res) {
      // console.log(req.body);
      let recipeToDelete = req.body;
      // console.log(recipeToDelete._id);
      const _id = new ObjectID(recipeToDelete._id);
      // https://stackoverflow.com/questions/39102845/my-document-is-not-getting-deleted-in-mongodb-in-nodejs

      recipeCollection.deleteOne(
        { _id: _id }
      ).then(result => {
        // console.log("result: " + result);
        return res.send(recipeToDelete);
      })
      .catch(error => console.error(error))
      /*
      initialRecipe = initialRecipe.filter(function(jsonObject) {
        return jsonObject.title != recipeToDelete.title;
      });
      return res.send(recipeToDelete);
      */
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
  })
  .catch(error => console.error(error))

// baseline taken from https://rapidapi.com/blog/create-react-app-express/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
