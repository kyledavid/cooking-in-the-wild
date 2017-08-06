const React = require('react');
const ReactDOM = require('react-dom');
const Ingredients = require('./Ingredients.jsx');
const Skillet = require('./Skillet.jsx');
const Cook = require('./Cook.jsx');
const Dish = require('./Dish.jsx');
const ingredientList = require('../utils/ingredients.json');
const recipeLookup = require('../utils/recipeLookup.js');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: ingredientList,
      skillet: [],
      cooked: false,
    }

    this.addToSkillet = this.addToSkillet.bind(this);
    this.startCooking = this.startCooking.bind(this);
  }
  addToSkillet(ingredient) {
    let ingredients = this.state.ingredients.slice();
    let skillet = this.state.skillet.slice();

    skillet.push(ingredient);
    ingredients = ingredients.filter((currentIngredient)=>{
      return currentIngredient != ingredient;
    });

    this.setState({
      ingredients,
      skillet,
    });
  }
  startCooking() {
    this.setState({
      cooked: true,
    });
  }
  getCooked() {
    const ingredients = this.state.skillet;
    const dishMade = recipeLookup(ingredients);

    return dishMade;
  }

  render() {
    let dishCooked  = '';
    this.state.cooked ? dishCooked = this.getCooked() : null;

    console.log(dishCooked)

    return (
      <section id="app">
        <Ingredients ingredientList={this.state.ingredients} addToSkillet={this.addToSkillet} />
        <Skillet skilletList={this.state.skillet} />
        <Cook cook={this.startCooking} />
        <Dish dishCooked={dishCooked} />
      </section>
    );
  }
}

module.exports = App;
