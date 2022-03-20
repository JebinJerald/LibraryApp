const express = require('express');
const app = express();
const nav = [
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/index',name:"Add Book"},
    {link:'/addBook',name:"Add Book"},
    {link:'/addAuthor',name:"Add Author"},
    {link:'/login',name:"Login"},
    {link:'/signup',name:"Sign Up"}
];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)
const authorRouter =require("./src/routes/authorRoutes")(nav)
const addauthorRouter =require("./src/routes/addauthorRoutes")(nav)
const signupRouter =require("./src/routes/signupRoutes")(nav)
const loginRouter =require("./src/routes/loginRoutes")(nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/admin',adminRouter);
app.use('/addBook',adminRouter);
app.use('/authors',authorRouter);
app.use('/addAuthor',addauthorRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(5000);