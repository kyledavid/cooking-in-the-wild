const React = require('react');
const ReactDOM = require('react-dom');
const Ingredients = require('./Ingredients.jsx');
const Bowl = require('./Bowl.jsx');
const Cook = require('./Cook.jsx');
const Dish = require('./Dish.jsx');
const ingredientList = require('../utils/ingredients.json');
const recipeLookup = require('../utils/recipeLookup.js');
const firebase = require('../utils/firebase.js');

// Note, backpack can be a constant and just filter based on the bowl state

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: ingredientList,
      bowl: [],
      cooked: false,
      dish: 'poo',
    }

    this.addToBowl = this.addToBowl.bind(this);
    this.startCooking = this.startCooking.bind(this);
    this.removeFromBowl = this.removeFromBowl.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  addToBowl(ingredient) {
    let ingredients = this.state.ingredients.slice();
    let bowl = this.state.bowl.slice();

    bowl.push(ingredient);
    ingredients = ingredients.filter((currentIngredient)=>{
      return currentIngredient != ingredient;
    });

    this.setState({
      ingredients,
      bowl,
      cooked: false,
    });
  }

  removeFromBowl(ingredient) {
    let ingredients = this.state.ingredients.slice();
    let bowl = this.state.bowl.slice();

    ingredients.push(ingredient);
    bowl = bowl.filter((currentIngredient)=>{
      return currentIngredient != ingredient;
    });

    this.setState({
      ingredients,
      bowl,
      cooked: false,
    });
  }

  startCooking() {
    this.setState({
      cooked: true,
    });
  }

  getRecipe() {
    firebase.database().ref('recipes').once('value').then(snapshot => {
      const rows = snapshot.val();
      const air = rows[`${this.state.bowl.length || 0}-ingredients`][0];

      console.log(air)

      this.setState({
        dish: air,
      });
    });
  }

  getCooked() {
    const ingredients = this.state.bowl;
    const dishMade = recipeLookup(ingredients);
    console.log(dishMade);

    return dishMade;
  }

  componentWillMount() {
    this.getRecipe();
  }

  render() {
    let dishCooked  = {};
    this.state.cooked ? dishCooked = this.getCooked() : null;

    return (
      <div>
        <h1 className="wild-header">Cooking in the Wild</h1>
        <h2>{this.state.dish.name}</h2>
        <section id='app' className="comp-row">
          <Ingredients ingredientList={this.state.ingredients} addToSkillet={this.addToBowl} />
          <Bowl bowlList={this.state.bowl} removeFromBowl={this.removeFromBowl} />
          <Cook cook={this.startCooking} cooked={this.state.cooked} />
          <Dish dishCooked={dishCooked} />
        </section>
      </div>
    );
  }
}

module.exports = App;
