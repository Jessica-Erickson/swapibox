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

  loadingCheck = (category) => {
    this.setState({ [category]: false });
  }

  render() {
    let ready = !filmsLoading && !peopleLoading && !planetsLoading && !vehiclesLoading;

    return
        <div className={ ready ? 'App' : 'loading' }>
          <ScrollingText
            display={ready}
            loadingCheck={() => {
              loadingCheck('filmsLoading');
            }} />
        </div>
      )
    }
  }
}