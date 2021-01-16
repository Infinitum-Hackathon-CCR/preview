import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() { 
    const { thumbnail, title, body } = this.props;
    return (
      <div className="card">
        <img className="card-thumbnail" src={thumbnail} alt={title}/>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    );
  }
}
 
export default Card;
