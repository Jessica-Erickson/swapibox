import React, { Component } from 'react';
import './Card.css';
<<<<<<< HEAD
import PropTypes from 'prop-types';
const src1 = require('./../../assets/icons/lightsaber-wt.png');
const src2 = require('./../../assets/icons/lightsaber-bk.png');
=======
import whiteSaber from './../../assets/icons/lightsaber-wt.png';
import blackSaber from './../../assets/icons/lightsaber-bk.png';
>>>>>>>  Refactor tests to match snapshots vs lengths

class Card extends Component {
  constructor () {
    super();
    this.state = {
      isActive: false,
      src: whiteSaber
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
          onMouseOver={() => {this.setState({ src: blackSaber })}}
          onMouseOut={() => {this.setState({ src: whiteSaber })}}
          alt='The hilt of a lightsaber. Turn the lightsaber on to favorite this card.'
          onClick={() => {
            this.setState({ src: whiteSaber });
            this.handleSaberClick();
          }} />
        <ul className='content'>
          <li>Homeworld: {contents.homeworld}</li>
          <li>Species: {contents.species}</li>
          <li>Population: {contents.homePop}</li>
        </ul>
      </article>
    )
  }
}

Card.propTypes = {
  contents: PropTypes.object.isRequired
}

export default Card;
