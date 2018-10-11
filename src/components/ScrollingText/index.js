import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ScrollingText.css';


class ScrollingText extends Component {
  constructor() {
    super();
    this.state = {
      film: 0
    } 
  }

  changeText = () => {
    const newFilm = Math.floor(Math.random() * 7);
    this.setState({ film: newFilm });
  }

  render() {
    return (
      <aside 
        className="ScrollingText"
        onAnimationEnd={this.changeText}>
        
      </aside>
    )
  }
}

ScrollingText.propTypes = {
  allFilms: PropTypes.array.isRequired
}

export default ScrollingText;