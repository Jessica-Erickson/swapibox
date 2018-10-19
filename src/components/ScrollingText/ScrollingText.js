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

  componentDidMount = async () => {
    let allFilms;
    if (!localStorge.getItem('allFilms')) {
      allFilms = JSON.parse(localStorge.getItem('allFilms'));
    } else {
      allFilms = await API.films();
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
        className={display ? 'ScrollingText' : 'display-none')}>
        <div className='fade'></div>
        <div 
          className={display ? 'scrolling-wrapper' : ''}
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

ScrollingText.propTypes = {
  display: PropTypes.bool.isRequired,
  loadingCheck: PropTypes.func.isRequired
}

export default ScrollingText;