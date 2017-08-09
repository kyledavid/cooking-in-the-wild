const React = require('react');
const style = require('../style.css');

class Heading extends React.Component {
  render() {
    return <h1 className={style['comp-heading']}>{this.props.children}</h1>;
  }
}

module.exports = Heading;
