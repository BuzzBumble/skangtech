var path = require('path');
var express = require('express');
const app = express();

app.set('view engine', 'ejs');

let cards = [
  {
    url: "https://medium.com/@s.kang919/should-you-learn-vim-7bae203a4598",
    image: "https://cdn-images-1.medium.com/max/1600/0*LNNP5hH0o3QBODC_",
    title: "Should You Learn Vim?",
    subtitle: "Why I learned Vim and some basic resources to get you started"
  },
  {
    url: "https://medium.com/better-programming/breaking-out-of-the-tutorial-trap-be973e4ed7aa",
    image: "https://cdn-images-1.medium.com/max/1600/0*4iVqcchmhS5x1nWr",
    title: "Breaking Out Of The Tutorial Trap",
    subtitle: "How I learned to stop copying and start learning",
    pub: "https://cdn-images-1.medium.com/max/480/1*7A4lpkuHgEyGrIYzfAj4dA@2x.png"
  },
  {
    url: "https://medium.com/@s.kang919/my-git-feature-branch-workflow-a4b9647ea459",
    image: "https://cdn-images-1.medium.com/max/1600/1*1lJJpCGTXq6wY04Wrhc7Zw.png",
    title: "My Git Feature-Branch Workflow",
    subtitle: "A workflow guide that can help you hit the ground running with Git"
  },
]

app.get('/', (req, res) => {
  res.render('index', {cards});
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 8000, (err) => {
  if (err) {
    console.log(err);
  }
});
