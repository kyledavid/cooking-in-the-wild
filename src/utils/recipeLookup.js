const dishes = require('./dishes.json');

const lookupRecipe = function(ingredients) {
  if (ingredients.includes(`Raw Birdleg`) && ingredients.includes(`Bee's Goo`)) {
    return dishes[1];
  } else {
    return dishes[0]
  }
}

module.exports = lookupRecipe;
