require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Article = require('./models/article');
const PORT = process.env.PORT;
mongoose.connect(`${process.env.DB_HOST}`);
app.use(express.urlencoded({extended: false}));


app.get('/', async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: 'asc'
  });
  res.send(articles);
})

app.post('/', (req, res) => {
  const newArticle = new Article({
    title: req.body.title,
    description: req.body.description,
    location: req.body.location
  });
  newArticle.save();
})

app.listen(PORT || 3000, () => {
  console.log("Server is running on PORT: 5000");
})