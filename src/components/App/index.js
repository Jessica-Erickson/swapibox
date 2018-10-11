import React, { Component } from 'react';
import * as API from '../../helper.js';

import ScrollingText from '../ScrollingText'
import Header from '../Header'
import CardContainer from '../CardContainer'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allFilms: []
    }
  }

  async componentDidMount() {
    this.setState({ allFilms: await API.getFilms() });
  }

  render() {
    const { allFilms } = this.state;
    return (
      <div className="App">
        <ScrollingText allFilms={allFilms} />
        <Header />
        <CardContainer />
      </div>
    );
  }
}

export default App;
