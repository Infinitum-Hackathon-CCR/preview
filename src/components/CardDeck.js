import React, { Component } from 'react';
import './CardDeck.css';

class CardDeck extends Component {
  render() { 
    return (
      <div className="card-deck">
        {this.props.children}
      </div>
    );
  }
}
 
export default CardDeck;
