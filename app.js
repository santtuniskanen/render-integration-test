const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Well, Hello There! General Kenobi.')
  res.send('Bold one are you')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
