const express= require('express');
const app = express();
require('./Modèle/dbConfig.js');

app.listen(5500, ()=> console.log('Server Started:5500'));

