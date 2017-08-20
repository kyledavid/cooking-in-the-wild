const React = require('react');
const Ingredient = require('./Ingredient.jsx');
const Heading = require('./Heading.jsx');

class Ingredients extends React.Component {
  showIngredients() {
    let ingredients = this.props.ingredientList;

    if(this.props.bowlList.length) {
      ingredients = ingredients.filter((ingredient) => {
        return !this.props.bowlList.includes(ingredient);
      });
    }


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
      <section id='Ingredients' className="component backpack">
        <Heading>Backpack</Heading>
        <ul>
          { ingredients }
        </ul>
      </section>
    )
  }
}

module.exports = Ingredients;
