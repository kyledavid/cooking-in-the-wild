const dishes = require('./dishes.json');
const _ = require('lodash');

const lookupRecipe = function(cookedIngs) {
  const row = dishes[cookedIngs.length];
  var dishMade;

  row ? row.forEach((dish)=>{
    if(!_.difference(dish.ingredients,cookedIngs).length){
      dishMade = dish;
    }
  }) : null;

  return dishMade ? dishMade : dishes[0][0];
}

module.exports = lookupRecipe;
