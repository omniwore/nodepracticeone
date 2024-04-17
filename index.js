require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('ayush@twitter.com')
  })

app.get('/chai', (req,res)=>{
    res.send('<h1> Chai pee lo bhai </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`)
})