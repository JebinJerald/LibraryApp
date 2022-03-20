const express = require("express");
const authorRouter =express.Router();
const Authordata = require("../model/Authordata");

function router(nav){
    // var authors = [
    //     {
    //         title:"",
    //         about:"",
    //         image: ".jpg"
    //     },
    //     {
    //         title:"",
    //         about:"",
    //         image: ".jpg"
    //     },
    //     {
    //         title:"",
    //         about:"",
    //         image: ".jpg"
    //     }
    // ];
    
    authorRouter.get('/',(req,res)=>{
        Authordata.find()
        .then(function(authors){
            res.render("authors",{nav,
            title:'Authors',
            authors});
        })

        
    });
  
    authorRouter.get('/:id',(req,res)=>{
        const id =req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{nav,
            title:"Author",
            author});
        })
    });
    
    return authorRouter
}

module.exports =router;