const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');

function router(nav) {
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbara',
    //         genre: 'Cartoon',
    //         img: "download.jpg"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rowling',
    //         genre: 'Fantasy',
    //         img: "download1.jpg"
    //     },
    //     {
    //         title: 'Paathumayude Aadu',
    //         author: 'Basheer',
    //         genre: 'Drama',
    //         img: "download2.jpg"
    //     }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(book){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        })    
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                title:'Library',
                book
            });
        })    
    });

    return booksRouter;
}

module.exports = router;