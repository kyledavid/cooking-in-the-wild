const React = require('react');
const ReactDOM = require('react-dom');
const Ingredients = require('./Ingredients.jsx');
const Skillet = require('./Skillet.jsx');
const Cook = require('./Cook.jsx');
const Dish = require('./Dish.jsx');
const ingredientList = require('../utils/ingredients.json');
const recipeLookup = require('../utils/recipeLookup.js');
const style = require('../style.css');

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
    this.removeFromSkillet = this.removeFromSkillet.bind(this);
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
      cooked: false,
    });
  }

  removeFromSkillet(ingredient) {
    let ingredients = this.state.ingredients.slice();
    let skillet = this.state.skillet.slice();

    ingredients.push(ingredient);
    skillet = skillet.filter((currentIngredient)=>{
      return currentIngredient != ingredient;
    });

    this.setState({
      ingredients,
      skillet,
      cooked: false,
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
    let dishCooked  = {};
    this.state.cooked ? dishCooked = this.getCooked() : null;

    return (
      <div>
        <h1 className={style['wild-header']}>Cooking in the Wild</h1>
        <section id='app' className={style['comp-row']}>
          <Ingredients ingredientList={this.state.ingredients} addToSkillet={this.addToSkillet} />
          <Skillet skilletList={this.state.skillet} removeFromSkillet={this.removeFromSkillet} />
          <Cook cook={this.startCooking} cooked={this.state.cooked} />
          <Dish dishCooked={dishCooked} />
        </section>
      </div>
    );
  }
}

module.exports = App;
