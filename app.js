const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

// Express configureations
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: ture }))


app.listen(3000, () => console.log('Server has been started'))