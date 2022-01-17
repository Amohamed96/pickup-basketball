const express = require('express')
const app = express()

const port = 3001

app.listen(port, (req, res) => {
  console.log('Server Running....');
})