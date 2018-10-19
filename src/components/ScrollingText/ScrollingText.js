import React, { Component } from 'react';
import * as API from '../../helper.js';
import PropTypes from 'prop-types';
import './ScrollingText.css';

class ScrollingText extends Component {
  constructor() {
    super();
    this.state = {
      allFilms: [],
      displayFilm: 0
    }
  }

  async componentDidMount() {
    let allFilms;
    if (!localStorge.getItem('allFilms')) {
      allFilms = JSON.parse(localStorge.getItem('allFilms'));
    } else {
      allFilms = await API.getFilms();
      localStorge.setItem('allFilms', JSON.stringify(allFilms));
    }
    this.setState({ allFilms }, this.props.loadingCheck());
  }

  changeText = () => {
    const newFilm = Math.floor(Math.random() * 7);
    this.setState({ film: newFilm });
  }

  render() {
    const { allFilms , displayFilm } = this.state;
    const { display } = this.props;
    const currentFilm = allFilms[currentFilm];
    const { title , releaseDate , openingCrawl } = currentFilm;

    return (
      <aside 
        className={'ScrollingText ' + (display ? '' : 'display-none')}>
        <div className='fade'></div>
        <div 
          className='scrolling-wrapper'
          onAnimationIteration={this.changeText}>
          <p className='opening-crawl'>
            {openingCrawl}
          </p>
          <h2 className='title'>
            {title}
          </h2>
          <h3 className='release-date'>
            {releaseDate}
          </h3>
        </div>
      </aside>
    )
  }
}