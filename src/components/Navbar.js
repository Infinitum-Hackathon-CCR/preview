import React, { Component } from 'react';
import NavItem from './NavItem';
import './Navbar.css';

class Navbar extends Component {
  render() { 
    const { items } = this.props;
    return (
      <nav>
        <ul>
          {items.map(item => <NavItem text={item} />)}
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;
