const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const path = require('path'); // Import the path module
const Article = require('./models/article')

//routes
const userRouters = require('./routes/user')

const app = express();

//mongoose db connection
mongoose.connect('mongodb://localhost:27017/webdblog',{
    //useNewUrlParser:true
})

// Set the directory where your views are stored
app.set('views', path.join(__dirname, 'views'));

// View engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Route
app.get('/', async(req, res) => {
    const article = await Article.find();
    //console.log(article)
    res.render('index',{article:article}); // Renders the 'index.ejs' file in the views directory
});

//body parser
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//userRouters
app.use('/article',userRouters)

//public folder for css and js
app.use(express.static('public'))

// Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});
