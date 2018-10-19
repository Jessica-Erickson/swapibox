import React, { Component } from 'react';
import './ScrollingText.css';

class ScrollingText extends Component {
  constructor() {
    super();
    this.state = {
      allFilms: [],
      displayFilm: 0
    }
  }

  changeText = () => {
    const newFilm = Math.floor(Math.random() * 7);
    this.setState({ film: newFilm });
  }

  render() {
    const { allFilms , displayFilm } = this.state;
    const currentFilm = allFilms[currentFilm];
    const { title , releaseDate , openingCrawl } = currentFilm;

    return (
      <aside className='ScrollingText'>
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