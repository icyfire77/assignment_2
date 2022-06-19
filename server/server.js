const express = require('express')
const app = express()
const port = 3001

// baseline taken from https://rapidapi.com/blog/create-react-app-express/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
