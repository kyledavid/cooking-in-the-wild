const React = require('react');
const style = require('../style.css');

class Cook extends React.Component {
  render() {
    return (
      <section id='cook' className={style.component}>
        <button onClick={this.props.cook}>COOK</button>
        {/* Will Add Image of Campfire that switches on and off here */}
      </section>
    )
  }
}

module.exports = Cook;
