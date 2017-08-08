const React = require('react');
const PropTypes = require('prop-types');

const Dish = props => (
  <section id="dish">
    <h1>{props.dishCooked.name}</h1>
    <p>{props.dishCooked.description}</p>
  </section>
);


Dish.propTypes = {
  dishCooked: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

Dish.defaultProps = {
  dishCooked: {
    name: '',
    description: '',
  },
};

module.exports = Dish;
