const {Router} = require('express');

const homeRouter = Router();

homeRouter
    .get('/',(req,res)=>{
        res.redirect('/notes')
    })

module.exports ={
    homeRouter,
};