const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


//express app
const app =express();
//mongo connection
const dburi = 'mongodb+srv://user1:test123@node.q8nfi.mongodb.net/nodeCrash?retryWrites=true&w=majority';
mongoose.connect(dburi, { useNewUrlParser: true,useUnifiedTopology: true } )
    .then((result) => {console.log('Connected to DB');
        app.listen(3000);})
    .catch((err) => console.log(err));


// register view engine

//app.set('views', 'myviews'); // if the default views folder is named differently
app.set('view engine', 'ejs');

// listen for request now inside db connection

//app.listen(3000);


// middleware & static
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));



app.get('/', (req,res) => {
    //res.send('<p> Home Page </p>');
    //res.sendFile('./views/index.html', { root: __dirname })
    // const blogs = [
    //    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //  ];
    // res.render('index', { title: 'Home',blogs});
    res.redirect('/blogs');
});

app.get('/about', (req,res) => {
    //res.send('<p> about Page </p>');
    //res.sendFile('./views/about.html', { root: __dirname })
    res.render('about',{ title: 'About'});
});

app.get('/blogs/create', (req,res) => {

    res.render('create', { title: 'Create'});
});


// redirects
app.get('/about-us', (req,res) => {
    //res.send('<p> about Page </p>');
    res.redirect('/about');
});
//blog routes
app.use('/blogs',blogRoutes);
//app.use(blogRoutes);

// 404 page
app.use((req,res) => {
    res.status(404).render('404', { title: 'Page not found'});
});
