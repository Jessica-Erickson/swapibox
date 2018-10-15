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
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      currentDisplay: 'default'
    }
  }

  handleNavClick = (category) => {
    this.setState({ currentDisplay: category });
  }

  getDataFromLocalStorage = () => {
    const storage = Object.keys(this.state).reduce((stored, list) => {
      if (Array.isArray(this.state[list]) && list !== 'default') {
        stored[list] = JSON.parse(localStorage.getItem(list))
      }
      return stored;
    }, {})

    return storage
  }

  setDataInLocalStorage = (keyword, collection) => {
    localStorage.setItem(keyword, JSON.stringify(collection))
  }

  async componentDidMount() {
    if (localStorage.length) {
      this.setState({
        ...this.getDataFromLocalStorage(),
        isLoading: false
      });
    }
    else {
      const allData = {
        allFilms: await API.getFilms(),
        people: await API.getPeople(),
        planets: await API.getPlanets(),
        vehicles: await API.getVehicles(),
        favorites: []
      }

      Object.keys(allData).forEach(collection => {
        this.setDataInLocalStorage(collection, allData[collection])
      })

      this.setState({
        ...allData,
        isLoading: false });
    }
  }

  render() {
    const { isLoading, allFilms, favorites, currentDisplay } = this.state;
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
            favorites={favorites.length}
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
