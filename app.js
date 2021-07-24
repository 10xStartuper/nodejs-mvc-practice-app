const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

//Routes
const indexRouter = require('./routes/index')

// Express configureations
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts)
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', indexRouter)


app.listen(process.env.PORT || 3000, () => console.log('Server has been started'))