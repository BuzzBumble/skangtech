var path = require('path');
var express = require('express');
let fs = require('fs');
const app = express();
const axios = require('axios');
const favicon = require('serve-favicon');

const mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@s.kang919'

const themes = {
  simpledark: 'simple-dark',
  pixel: 'pixel',
};

const default_theme = 'simpledark';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
  const theme = req.query.theme ? req.query.theme : default_theme;
  let cards;
  axios.get(mediumURL)
    .then((data) => {
      cards = data.data.items;
      res.render(`${themes[theme]}/index`, {cards});
    }).catch((err) => {
      cards = [];
      res.render(`${themes[theme]}/index`, {cards});
    });
});

app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Port ${process.env.PORT || 8000}`);
  }
});
