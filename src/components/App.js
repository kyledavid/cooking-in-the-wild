const React = require('react');
const ReactDOM = require('react-dom');
const Ingredients = require('./Ingredients.jsx');
const Bowl = require('./Bowl.jsx');
const Cook = require('./Cook.jsx');
const Dish = require('./Dish.jsx');
const ingredientList = require('../utils/ingredients.json');
const recipeLookup = require('../utils/recipeLookup.js');
const firebase = require('../utils/firebase.js');
const _ = require('lodash');

// Note, backpack can be a constant and just filter based on the bowl state

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bowl: [],
      cooked: false,
      dish: '',
    }

    this.addToBowl = this.addToBowl.bind(this);
    this.startCooking = this.startCooking.bind(this);
    this.removeFromBowl = this.removeFromBowl.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  addToBowl(ingredient) {
    let bowl = this.state.bowl.slice();

    bowl.push(ingredient);

    this.setState({
      bowl,
      dish: '',
      cooked: false,
    });
  }

  removeFromBowl(ingredient) {
    let bowl = this.state.bowl.slice();

    bowl = bowl.filter((currentIngredient)=>{
      return currentIngredient != ingredient;
    });

    this.setState({
      bowl,
      dish: '',
      cooked: false,
    });
  }

  startCooking() {
    this.setState({
      cooked: true,
    });
  }

  getRecipe() {
    const bowl = this.state.bowl;
    const length = bowl.length;
    console.log(length)

    firebase.database().ref('recipes').once('value').then(snapshot => {
      const allDishes = snapshot.val();
      const dishesOfLength = allDishes[`${length || 0}-ingredients`];
      let dish = '';

      console.log(dishesOfLength);

      dishesOfLength ? dishesOfLength.forEach(possibleDish => {
        if(!_.difference(bowl, possibleDish.ingredients).length) {
          dish = possibleDish;
        }
      }) : null;

      this.setState({
        cooked: true,
        dish: dish ? dish : allDishes.garbage,
      });

    });
  }

  getCooked() {
    const ingredients = this.state.bowl;
    const dishMade = recipeLookup(ingredients);
    console.log(dishMade);

    return dishMade;
  }

  render() {
    return (
      <div>
        <h1 className="wild-header">Cooking in the Wild</h1>

        <section id='app' className="comp-row">
          <Ingredients ingredientList={ingredientList} bowlList={this.state.bowl} addToSkillet={this.addToBowl} />
          <Bowl bowlList={this.state.bowl} removeFromBowl={this.removeFromBowl} />
          <Cook cook={this.getRecipe} cooked={this.state.cooked} />
          <Dish dishCooked={this.state.dish} />
        </section>
      </div>
    );
  }
}

module.exports = App;
