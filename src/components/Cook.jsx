const React = require('react');
const PropTypes = require('prop-types');

class Cook extends React.Component {
  render() {
    const fire = this.props.cooked ? require('../img/fire-burning.png') : require('../img/fire-out.png');
    return (
      <section id='cook' className="component cook-comp">
        <button
          onClick={this.props.cook}
          className="btn-cook"
          >COOK</button>
          <img
            style={{width: '40%', margin: 'auto', display: 'block', marginTop: '40px'}}
            src={fire}
          />
      </section>
    )
  }
}

Cook.propTypes = {
  cook: PropTypes.func.isRequired,
  cooked: PropTypes.bool.isRequired,
};

module.exports = Cook;
