import React, { Component } from 'react';
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
    if (localStorage.getItem('allFilms') !== null) {
      allFilms = JSON.parse(localStorage.getItem('allFilms'));
    } else {
      allFilms = await this.props.fetchCall();
      localStorage.setItem('allFilms', JSON.stringify(allFilms));
    }
    this.setState({ allFilms }, this.props.loadingCheck());
  }

  changeText = () => {
    const newFilm = Math.floor(Math.random() * 7);
    this.setState({ displayFilm: newFilm });
  }

  render() {
    const { allFilms , displayFilm } = this.state;
    const currentFilm = allFilms[displayFilm];
    if (currentFilm !== undefined) {
      const { title , releaseDate , openingCrawl } = currentFilm;

      return (
        <aside 
          className='ScrollingText'>
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
    } else {
      return null;
    }
  }
}

ScrollingText.propTypes = {
  loadingCheck: PropTypes.func.isRequired,
  fetchCall: PropTypes.func.isRequired
}

export default ScrollingText;