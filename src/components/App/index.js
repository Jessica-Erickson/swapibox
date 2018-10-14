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
      default: [],
      allFilms: [],
      People: [],
      Favorites: [],
      currentDisplay: 'default'
    }
  }

  handleNavClick = (category) => {
    this.setState({ currentDisplay: category });
  }

  async componentDidMount() {
    this.setState({
      allFilms: await API.getFilms(),
      People: await API.getPeople(),
      isLoading: false });
  }

  render() {
    const { isLoading, allFilms, Favorites, currentDisplay } = this.state;
    const cardContents = this.state[currentDisplay];

    if (isLoading) {
      return (
        <div className="loading">
        </div>
      );
    } else {
      return (
        <div className="App">
          <ScrollingText allFilms={allFilms} />
          <Header
            favorites={Favorites.length}
            handleNavClick={this.handleNavClick}
            currentDisplay={currentDisplay}
          />
          <CardContainer
            cardContents={cardContents}
            currentDisplay={currentDisplay}
          />
        </div>
      );
    }
  }
}

export default App;
