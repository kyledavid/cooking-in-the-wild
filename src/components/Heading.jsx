const React = require('react');
const style = require('../style.css');

class Heading extends React.Component {
  render() {
    return <h1 className={style['comp-heading']}><span className={style[this.props.spanClass]}>{this.props.children}</span></h1>;
  }
}

module.exports = Heading;
