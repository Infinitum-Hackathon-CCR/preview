import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <section>
        <h2>{title}</h2>
        <p>{body}</p>
      </section>
    );
  }
}
 
export default Section;
