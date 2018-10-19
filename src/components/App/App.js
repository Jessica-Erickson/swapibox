import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as API from '../../helper.js';
import ScrollingText from '../ScrollingText';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      filmsLoading: true,
      peopleLoading: true,
      planetsLoading: true,
      vehiclesLoading: true,
    }
  }

  loadingCheck = (category) => {
    this.setState({ [category]: false });
  }

  render() {
    const { filmsLoading, peopleLoading, planetsLoading, vehiclesLoading, favorites } = this.state;
    const ready = !filmsLoading && !peopleLoading && !planetsLoading && !vehiclesLoading;

    return
        <div className={ ready ? 'App' : 'loading' }>
          <ScrollingText
            display={ready}
            loadingCheck={() => {
              loadingCheck('filmsLoading');
            }} />
          <Header 
            display={ready}
            favorites={favorites.length} />
        </div>
      )
    }
  }
}

export default App;