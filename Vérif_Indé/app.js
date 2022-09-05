const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! je suis Anthony')
})

app.listen(port, () => {
  console.log()
})