const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All Authors Route 
router.get('/', (req, res) => {
    res.render('authors/index')
});

//New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author() })
})

//Create author Route
router.post('/', (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    author.save((err, newAuthor) => {
            if (err) {
                res.render('authors/new', {
                    author: author,
                    errMessage: 'Error creating author'
                })
            } else {
                res.redirect(`/authors/${newAuthor.id}`)
            }
        })
        // res.status(200).json(req.body)
})

module.exports = router