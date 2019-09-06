var path = require('path');
var express = require('express');
const app = express();
const axios = require('axios');
const favicon = require('serve-favicon');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@s.kang919')
    .then((data) => {
      res.render('index', {cards: data.data.items});
    });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log(err);
  }
});
