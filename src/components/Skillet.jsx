const React = require('react');
const style = require('../style.css');

class Skillet extends React.Component {
  skilletLinks() {
    const skillet = this.props.skilletList;

    if (!skillet) {return};

    return skillet.map((skillItem)=>{
      return (
        <li key={skillItem}>
          <a href="#" onClick={()=>{this.props.removeFromSkillet(skillItem)}}>
            {console.log(`skillItem: ${skillItem}`)}
            {skillItem}
          </a>
        </li>
      );
    });
  }
  render() {
    const skillItems = this.skilletLinks();
    return (
      <section id="skillet" className={style.component}>
        <ul>
          {skillItems}
        </ul>
      </section>
    )
  }
}

module.exports = Skillet;
