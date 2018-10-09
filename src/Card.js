import React, { Component } from 'react';
import './Card.css';
const src1 = require('./lightsaber-wt.png');
const src2 = require('./lightsaber-bk.png');

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
      src: src1
    }
  }

  handleSaberClick = () => {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <article className={'Card ' + (this.state.isActive ? 'isAlsoLit' : 'isAlsoOff')}>
        <h3 className={'name ' + (this.state.isActive ? 'isBlack' : 'isWhite')}>Luke Skywalker</h3>
        <div className={'saber ' + (this.state.isActive ? 'isLit' : 'isOff')} ></div>
        <img
          className='hilt'
          src={this.state.src}
          onMouseOver={() => {this.setState({ src: src2 })}}
          onMouseOut={() => {this.setState({ src: src1 })}}
          alt='The hilt of a lightsaber. Turn the lightsaber on to favorite this card.'
          onClick={() => {
            this.setState({ src: src1 });
            this.handleSaberClick();
          }} />
      </article>
    )
  }
}