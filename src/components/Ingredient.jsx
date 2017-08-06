const React = require('react');

class Ingredient extends React.Component {
  render() {
    return (
      <li>
        <a
          onClick={()=>{this.props.addToSkillet(this.props.ingredient)}}
          href="#">
          {this.props.ingredient}
        </a>
      </li>
    )
  }
}

module.exports = Ingredient;
