const express = require('express');

//express app
const app =express();

// register view engine

//app.set('views', 'myviews'); // if the default views folder is named differntly
app.set('view engine', 'ejs');

// listen for request

app.listen(3000);

app.get('/', (req,res) => {
 //res.send('<p> Home Page </p>');
 //res.sendFile('./views/index.html', { root: __dirname })
 const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
 res.render('index', { title: 'Home',blogs});
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


// 404 page
app.use((req,res) => {
    res.status(404).render('404', { title: 'Page not found'});
});
