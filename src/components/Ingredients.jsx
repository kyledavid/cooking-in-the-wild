const React = require('react');
const Ingredient = require('./Ingredient.jsx');

class Ingredients extends React.Component {
  showIngredients() {
    const ingredients = this.props.ingredientList;

    if (!ingredients) {return;}

    return ingredients.map((ingredient)=>{
      return (
        <Ingredient
          key={ingredient}
          ingredient={ingredient}
          addToSkillet={this.props.addToSkillet}
        />
      )
    });
  }
  render() {
    const ingredients = this.showIngredients();
    return (
      <section id='Ingredients'>
        <ul>
          {ingredients }
        </ul>
      </section>
    )
  }
}

module.exports = Ingredients;