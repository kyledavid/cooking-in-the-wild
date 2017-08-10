const React = require('react');
const style = require('../style.css');
const Heading = require('./Heading.jsx');

class Skillet extends React.Component {
  bowlLinks() {
    const bowl = this.props.skilletList;

    if (!bowl) {return};

    return bowl.map((bowlItem)=>{
      return (
        <li key={bowlItem}>
          <a href="#" onClick={()=>{this.props.removeFromSkillet(bowlItem)}}>
            {console.log(`skillItem: ${bowlItem}`)}
            {bowlItem}
          </a>
        </li>
      );
    });
  }
  render() {
    const bowlItems = this.bowlLinks();
    return (
      <section id="skillet" className={`${style.component} ${style.bowl}`}>
        <Heading>Bowl</Heading>
        <ul>
          {bowlItems}
        </ul>
      </section>
    )
  }
}

module.exports = Bowl;
