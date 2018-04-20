require('dotenv').config()
const express = require('express')
      bodyParser = require('body-parser')
      c = require('./controller')
      SERVER_PORT = 3005
      app = express()
      massive =require('massive')

      const { CONNECTION_STRING } = process.env
      const db = app.get('db')
      app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
})

app.post('/register', )




app.listen(SERVER_PORT, () => {
  console.log(`Fire! the port is listening on ${SERVER_PORT}`);
  
})

