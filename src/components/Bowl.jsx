const React = require('react');
const Heading = require('./Heading.jsx');

class Bowl extends React.Component {
  bowlLinks() {
    const bowl = this.props.bowlList;

    if (!bowl) {return};

    return bowl.map((bowlItem)=>{
      return (
        <li key={bowlItem}>
          <a href="#" onClick={()=>{this.props.removeFromBowl(bowlItem)}}>
            {bowlItem}
          </a>
        </li>
      );
    });
  }
  render() {
    const bowlItems = this.bowlLinks();
    return (
      <section id="skillet" className="component bowl">
        <Heading>Bowl</Heading>
        <ul>
          {bowlItems}
        </ul>
      </section>
    )
  }
}

module.exports = Bowl;
