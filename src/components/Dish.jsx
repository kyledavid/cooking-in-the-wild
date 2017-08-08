const React = require('react');
const PropTypes = require('prop-types');
const style = require('../style.css');

const Dish = props => (
  <section id="dish" className={style.component}>
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
