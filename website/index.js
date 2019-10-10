const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get("/vis1", (req, res) => {
  res.render("vis1");
});

app.get("/vis2", (req, res) => {
    res.render("vis2");
  });

app.get("/vis3", (req, res) => {
    res.render("vis3");
  });

app.listen(3000, function () {
  console.log('listening on port 3000')
})