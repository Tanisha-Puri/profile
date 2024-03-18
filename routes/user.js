const express = require('express');
const Router = express.Router();
const Article = require('../models/article')

//new form view
Router.get('/new',(req,res)=>{
    res.render('article/new')
})

//update
Router.get('/edit/:id',async(req,res)=>{
    const article_data = await Article.findById({_id:req.params.id})
    res.render('article/edit',{article:article_data})
})

Router.post('/edit/:id', async (req, res) => {
    try {
        const updatedDoc = await Article.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (updatedDoc) {
            res.redirect('/');
        } else {
            console.log('Cannot update');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while updating the article.');
    }
});


//single page view
Router.get('/:slug',async(req,res)=>{
    const article = await Article.findOne({slug:req.params.slug})
    if(article==null){res.redirect('/')}
    res.render('article/show',{article:article})
})

Router.post('/',(req,res)=>{
    const article = new Article({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        websiteLink:req.body.websiteLink
    })
    article.save().then(()=>{
        res.redirect('/')
    })
})

//delete
Router.get('/delete/:id', async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        res.send('Sorry, an error occurred.');
    }
});


module.exports = Router;