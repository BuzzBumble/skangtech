var path = require('path');
var express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening on port ${PORT}`);
})

