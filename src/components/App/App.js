import React, { Component } from 'react';
import * as API from '../../helper.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filmsLoading: true,
      peopleLoading: true,
      planetsLoading: true,
      vehiclesLoading: true,
    }
  }

  loadCheck = (category) => {
    this.setState({})
  }

  render() {
    if (filmsLoading && peopleLoading && planetsLoading && vehiclesLoading) {
      return <div className='loading'></div>
    } else {
      return (
        <div className='App'>
          <ScrollingText />
        </div>
      )
    }
  }
}