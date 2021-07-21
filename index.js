const express= require('express');
const app = express();
require('./Modèle/dbConfig.js');
const postsController = require('./Controller/postsController');
const bodyParser = require('body-parser');


app.listen(5500, ()=> console.log('Server Started:5500'));

app.use('/',  postsController);
app.use(bodyParser.json());
