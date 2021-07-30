const { response } = require('express');
const express = require('express');
// const connection = require('./db');
const router = express.Router();
const connection = require('./db');

// module.exports = app =>{
//     const tuturials = require('../server/server');

//     app.post('/about',tuturials.create);
//     app.get('/get',tuturials.getAll);
// };

router.get('/home', (req, res) => {

    let query ="select * from register";
    console.log('query')
    connection.query(query,(err,result)=>{
        if (err)
        res.status(500).send({
            message:err.message||"some error occurred while"
        });
        else res.send(result);
    });
});


router.post('/about', (req, res) => {
    let data = req.body
    console.log('data')
    let query = `call poststudent('${data.name}','${data.email}')`;
    
    connection.query(query,(err,resp)=>{
        if(err)
        res.status(500).send({
            message:err.message||"some error occurred while"
        });
        else res.send(resp)
    })
})


module.exports = router;