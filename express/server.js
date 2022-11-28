require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Article = require('./models/article');
const Location = require('./models/location');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;
mongoose.connect(`${process.env.DB_HOST}`);
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/location', async (req, res) => {
  const location = await Location.find().sort({
    code: 'desc'
  });
  res.send(location);
})

app.post('/location', (req, res) => {

  if (req.body.length !== undefined) {
    for(let i = 0; i < req.body.length; i++) {
      const newLocation = new Location({
        code: req.body[i].code,
        si: req.body[i].si,
        gu: req.body[i].gu,
        dong:req.body[i].dong,
        nx:req.body[i].nx,
        ny:req.body[i].ny,
        longitude:req.body[i].longitude,
        latitude:req.body[i].latitude
      });
      newLocation.save((e) => {
        if (e) {
          res.send(e);
        }
      })
    }
    res.send("All of the location is added");
  } else {
  const newLocation = new Location({
    code: req.body.code,
    si: req.body.si,
    gu: req.body.gu,
    dong:req.body.dong,
    nx:req.body.nx,
    ny:req.body.ny,
    longitude:req.body.longitude,
    latitude:req.body.latitude
  });
  newLocation.save((e) => {
    if (e) {
      res.send(e);
    } else {
      res.send("Location is added");
    }
  })
}
})


app.get('/articles', async (req, res) => {
  const articles = await Article.find().sort({
    recommended: 'asc'
  });
  res.send(articles);
})

app.post('/articles', (req, res) => {
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