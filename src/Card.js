import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false
    }
  }

  handleSaberClick = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <article className={'Card ' + (this.state.isActive ? 'isLit' : '')}>
        <img 
          src='lightsaber-wt.png' 
          alt='The hilt of a lightsaber. Turn the lightsaber on to favorite this card.'
          onClick={handleSaberClick} />
      </article>
    )
  }
}