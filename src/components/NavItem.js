import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
  render() {
    const { text } = this.props;
    return (
      <li><a href="/">{text}</a></li>
    );
  }
}
 
export default NavItem;
