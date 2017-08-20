const React = require('react');
const PropTypes = require('prop-types');
const Heading = require('./Heading.jsx');

const Dish = props => (
  <section id="dish" className="component">
    <Heading spanClass="backdrop">{props.dishCooked.name}</Heading>
    <p style={{paddingLeft: '1em'}}>{props.dishCooked.description}</p>
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
