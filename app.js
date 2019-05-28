var path = require('path');
var express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  }
});
