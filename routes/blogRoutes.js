const express = require('express');
const router = express.Router();
const Blog = require('../Models/blog');



router.get('/blogs', (req,res) => {

    Blog.find().sort({createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs',blogs: result});
        })
        .catch((err) => {
            console.log(err);
        });
});
router.post('/blogs', (req,res) => {

    //console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('./blogs');
        })
        .catch((err) => {
            console.log(err);
        });

});
router.get('/blogs/:id', (req,res) => {

    const  id= req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', {blog: result, title: 'Blog details'});
        })
        .catch((err) => {
            console.log(err);
        });
});

router.delete('/blogs/:id', (req,res) => {

    const  id= req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({redirect: '/blogs'})
        }).catch((err) => {
        console.log(err);
    });
});
// mongoose and mongo sandbox routes
router.get('/add-blog', (req,res) => {
    const  blog = new Blog({
        title: 'new blog2',
        snippet: 'about my new blog2',
        body: 'more about my new blog2'
    });
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });

});

router.get('/all-blogs', (req,res) => {

    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });

});

router.get('/single-blog', (req,res) => {

    Blog.findById('6024b22d3956f82a3858f3ed')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });

});

// router.use((req, res, next) => {
//     console.log('New request was made');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
//
// });
 module.exports= router;