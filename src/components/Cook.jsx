const React = require('react');
const PropTypes = require('prop-types');

const Cook = (props) => {
  const sticks = require('../img/fire-out.png');
  const fire = require('../img/fire-burning.png');

  return (
    <section id='cook' className="component cook-comp">
      <button
        onClick={props.cook}
        className="btn-cook"
        >COOK</button>
        <img
          style={{width: '40%', margin: 'auto', display: props.cooked ? 'none' : 'block', marginTop: '40px'}}
          src={sticks}
        />
        <img
          style={{width: '40%', margin: 'auto', display: props.cooked ? 'block' : 'none', marginTop: '40px'}}
          src={fire}
        />
    </section>
  );
}

Cook.propTypes = {
  cook: PropTypes.func.isRequired,
  cooked: PropTypes.bool.isRequired,
};

module.exports = Cook;
