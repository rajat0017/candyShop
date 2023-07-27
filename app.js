const express = require('express');

const path = require('path');

const bodyParser= require('body-parser');

const app = express();

const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const sequelize = require('./util/database');

const adminroutes= require('./routes/admin')

app.use(adminroutes);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });