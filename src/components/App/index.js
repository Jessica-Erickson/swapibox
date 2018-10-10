import React, { Component } from 'react';

import ScrollingText from '../ScrollingText'
import Header from '../Header'
import CardContainer from '../CardContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <ScrollingText />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
