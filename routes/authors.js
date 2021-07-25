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
router.post('/', async(req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()
        res.redirect(`/authors/${newAuthor.id}`)

    } catch {
        res.render('authors/new', {
            author: author,
            errMessage: 'Error creating author'
        })
    }
})

module.exports = router