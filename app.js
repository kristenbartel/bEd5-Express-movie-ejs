const port = 3333;

const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("tiny"));

// view engine setup with ejs instead of html
app.set("view engine", "ejs")

app.use(express.static("./public"));

const db = require("./Models/db");

const indexRoute = require('./routes/index')
app.use('/', indexRoute) //or app.use('/', require('./routes/index')) 

app.use('/shows', require('./routes/shows'))

app.use('/showDetails/:movieDetails', require('./routes/showDetails'))

app.listen(port, () => {
  console.log(`YO JOE!  Coming in HOT on http://localhost:${port}`);
});
// --------------

