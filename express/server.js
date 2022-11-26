require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Article = require('./models/article');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
mongoose.connect(`${process.env.DB_HOST}`);
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    recommended: 'asc'
  });
  res.send(articles);
})

app.post('/', (req, res) => {
  const date = new Date();
  const newArticle = new Article({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    craetedAt: date.toLocaleString()
  });
  newArticle.save((e) => {
    if (e) {
      res.send(e);
    } else {
      res.send("Successfully added.");
    }
  });
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})