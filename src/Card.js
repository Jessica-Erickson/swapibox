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
      <article className={'Card ' + (this.state.isActive ? 'isAlsoLit' : '')}>
        <h3>Luke Skywalker</h3>
        <div className={'saber' + (this.state.isActive ? 'isLit' : '')} ></div>
        <img
          src='lightsaber-wt.png'
          onMouseOver={this.src='lightsaber-bk.png'}
          onMouseOut={this.src='lightsaber-wt.png'} 
          alt='The hilt of a lightsaber. Turn the lightsaber on to favorite this card.'
          onClick={() => {
            this.src='lightsaber-bk.png';
            handleSaberClick();
          }} />
      </article>
    )
  }
}