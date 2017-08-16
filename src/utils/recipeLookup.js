const _ = require('lodash');
const firebase = require('./firebase.js')


// change so it just looks to see if recipe .contains each different ingredient

const lookupRecipe = function(cookedIngs) {
  return firebase.database().ref('recipes').once('value').then(function(snapshot) {
    const rows = snapshot.val();
    const row = rows[`${cookedIngs.length || 0}-ingredients`];

    console.log(row);
    let dishMade;

    row ? row.forEach((dish)=>{
      if(!_.difference(dish.ingredients,cookedIngs).length){
        dishMade = dish;
      }
    }) : null;

    return dishMade ? dishMade : cookedIngs ? row[0] : row[1];
  });
  /*
  console.log(dishes);
  */
}

module.exports = lookupRecipe;
