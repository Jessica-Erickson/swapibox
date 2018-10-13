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
      allFilms: []
    }
  }

  async componentDidMount() {
    this.setState({ allFilms: await API.getFilms(), isLoading: false });
    // this.setTimeout(this.setState({isLoading: false}), 1500)
  }

  render() {
    const { isLoading, allFilms } = this.state;

    if (!isLoading) {
      return (
        <div className="App">
          <ScrollingText allFilms={allFilms} />
          <Header />
          <CardContainer />
        </div>
      );
    } else {
      return (
        <div className="loading">
        </div>
      )
    }
  }
}

export default App;
