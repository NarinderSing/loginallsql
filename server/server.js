const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000


// parse application/json
// app.use(bodyParser.json())
var bodyParser = require('body-parser');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./db')


app.use(require('./routes'));


app.listen(port,()=>{
    console.log("listern new console")
});