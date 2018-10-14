import React, { Component } from 'react';
import './Card.css';
const src1 = require('./../../assets/icons/lightsaber-wt.png');
const src2 = require('./../../assets/icons/lightsaber-bk.png');

class Card extends Component {
  constructor () {
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
    const { isActive , src } = this.state;
    const { contents } = this.props;

    return (
      <article className={'Card ' + (isActive ? 'isAlsoLit' : 'isAlsoOff')}>
        <h3 className={'name ' + (isActive ? 'isBlack' : 'isWhite')}>{contents.name}</h3>
        <div className={'saber ' + (isActive ? 'isLit' : 'isOff')} ></div>
        <img
          className='hilt'
          src={src}
          onMouseOver={() => {this.setState({ src: src2 })}}
          onMouseOut={() => {this.setState({ src: src1 })}}
          alt='The hilt of a lightsaber. Turn the lightsaber on to favorite this card.'
          onClick={() => {
            this.setState({ src: src1 });
            this.handleSaberClick();
          }} />
        <ul>
          <li>Homeworld: {contents.homeworld}</li>
          <li>Species: {contents.species}</li>
          <li>Population: {contents.homePop}</li>
        </ul>
      </article>
    )
  }
}

export default Card;
