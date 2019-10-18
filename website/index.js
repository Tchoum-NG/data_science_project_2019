const express = require('express')
const csv = require('csv-parser');
const fs = require('fs');
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', function (req, res) {
  var datap = []
  fs.createReadStream('../data/data_visualization_new.csv')
    .pipe(csv())
    .on('data', (row) => {
      datap.push(row);
    })
    .on('end', () => {
      //console.log(JSON.stringify(datap[0]))
      console.log('successfully read the csv file');
      res.render('index', {
        datap1: JSON.stringify(datap),
      });
    })
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