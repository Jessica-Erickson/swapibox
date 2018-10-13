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
      isLoading: true,
      allFilms: [],
      favorites: []
    }
  }

  async componentDidMount() {
    this.setState({ allFilms: await API.getFilms(), isLoading: false });
  }

  render() {
    const { isLoading, allFilms, favorites } = this.state;

    if (isLoading) {
      return (
        <div className="loading">
        </div>
      )
    } else {
      return (
        <div className="App">
          <ScrollingText allFilms={allFilms} />
          <Header favorites={favorites} />
          <CardContainer />
        </div>
      );
    }
  }
}

export default App;
