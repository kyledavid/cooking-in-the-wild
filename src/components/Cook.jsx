const React = require('react')

class Cook extends React.Component {
  render() {
    return (
      <button onClick={this.props.cook}>COOK</button>
    )
  }
}

module.exports = Cook;
