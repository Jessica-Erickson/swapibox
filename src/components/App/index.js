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
      default: ['Select a Category!'],
      allFilms: [],
      people: [],
      favorites: [],
      currentDisplay: 'default'
    }
  }

  async componentDidMount() {
    this.setState({ 
      allFilms: await API.getFilms(),
      people: await API.getPeople(), 
      isLoading: false });
  }

  render() {
    const { isLoading, allFilms, favorites, currentDisplay } = this.state;

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
          <CardContainer cardContents={this.state[currentDisplay]} />
        </div>
      );
    }
  }
}

export default App;
