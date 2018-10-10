import React, { Component } from 'react'
import './ScrollingText.css'

class ScrollingText extends Component {
  constructor() {
    super();
    this.state = {
      film: 0
    } 
  }
  render() {
    return (
      <aside className="ScrollingText">
      </aside>
    )
  }
}

export default ScrollingText;