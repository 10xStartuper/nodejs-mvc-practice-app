if (process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}
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

console.log(process.env.DATABASE_URL);

//Model configs
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection
db.on('error', (err) => {
    console.error(err);
})
db.once('open', () => {
    console.log("Databse connected");
})



app.listen(process.env.PORT || 3000, () => console.log('Server has been started'))