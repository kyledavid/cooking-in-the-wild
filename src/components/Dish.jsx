const React = require('react');
const PropTypes = require('prop-types')

class Dish extends React.Component {
  render() {
    return (
      <section id="dish">
        <h1>{this.props.dishCooked.name}</h1>
        <p>{this.props.dishCooked.description}</p>
      </section>
    )
  }
}

Dish.defaultProps = {
  dishCooked: ['','']
}

module.exports = Dish;
