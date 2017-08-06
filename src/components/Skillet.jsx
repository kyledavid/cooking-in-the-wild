const React = require('react');

class Skillet extends React.Component {
  skilletLinks() {
    const skillet = this.props.skilletList;

    if (!skillet) {return};

    return skillet.map((skillItem)=>{
      return (
        <li key={skillItem}>
          <a href="#">
            {skillItem}
          </a>
        </li>
      );
    });
  }
  render() {
    const skillItems = this.skilletLinks();
    return (
      <section id="skillet">
        <ul>
          {skillItems}
        </ul>
      </section>
    )
  }
}

module.exports = Skillet;
