const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

Recipe.create({
  title: "Eggplant Curry",
  level: "easy",
  ingredients: [
    "1 eggplant",
    "1tbs curry",
    "1 tomato",
    "3 cups of water",
    "1 cup coconut milk"
  ],
  cuisine: "Thai",
  image: "Eggplant curry",
  duration: 25,
  creator: "Amanda"

})
  .then(recipe => { console.log(`The ${recipe.title} recipe was created!`) })

Recipe.create(data)
  .then(recipe => {
    for (let i = 0; i < recipe.length; i += 1) {
      console.log(`The ${recipe[i].title} was added`)
    }
  })









