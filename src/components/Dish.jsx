const React = require('react');
const PropTypes = require('prop-types')

class Dish extends React.Component {
  render() {
    return (
      <section id="dish">
        <h1>{this.props.dishCooked[0]}</h1>
        <p>{this.props.dishCooked[1]}</p>
      </section>
    )
  }
}

Dish.defaultProps = {
  dishCooked: ['','']
}

module.exports = Dish;
