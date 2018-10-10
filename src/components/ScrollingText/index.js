import React, { Component } from 'react'
import './ScrollingText.css'

class ScrollingText extends Component {
  constructor({ allFilms }) {
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
      <aside className="ScrollingText">
        
      </aside>
    )
  }
}

export default ScrollingText;