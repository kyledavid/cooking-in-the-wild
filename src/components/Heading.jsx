const React = require('react');

class Heading extends React.Component {
  render() {
    return <h1 className="comp-heading"><span className={this.props.spanClass}>{this.props.children}</span></h1>;
  }
}

module.exports = Heading;
