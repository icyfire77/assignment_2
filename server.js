const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

var ObjectID = require('mongodb').ObjectID;

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
      .catch(error => console.error(error));
    });

    app.put('/recipes', function(req, res) {
      console.log(req.body.new); // new fields after edit
      // console.log(req.body.old); // mongodb id of old field
      const _id = new ObjectID(req.body.old);
      recipeCollection.update({_id: _id},
        {$set : {
          title: req.body.new.title,
          ingredients: req.body.new.ingredients,
          duration: req.body.new.duration,
          instructions: req.body.new.instructions
          }
        }).then(result => {
          return res.send(req.body);
        })
        .catch(error => console.error(error));
    });
  })
  .catch(error => console.error(error))

// baseline taken from https://rapidapi.com/blog/create-react-app-express/

const path = require('path')

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../my-app/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../my-app/build/index.html'))
})

/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
