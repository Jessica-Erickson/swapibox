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

  async componentDidMount() {
    if (localStorage.length) {
      this.setState({
        allFilms: JSON.parse(localStorage.getItem('allFilms')),
        people: JSON.parse(localStorage.getItem('people')),
        planets: JSON.parse(localStorage.getItem('planets')),
        vehicles: JSON.parse(localStorage.getItem('vehicles')),
        favorites: JSON.parse(localStorage.getItem('favorites')),
        isLoading: false });
    }
    else {
      const allFilms = await API.getFilms();
      const people = await API.getPeople();
      const planets = await API.getPlanets();
      const vehicles = await API.getVehicles();
      const favorites = [];

      localStorage.setItem('allFilms', JSON.stringify(allFilms))
      localStorage.setItem('people', JSON.stringify(people))
      localStorage.setItem('planets', JSON.stringify(planets))
      localStorage.setItem('vehicles', JSON.stringify(vehicles))
      localStorage.setItem('favorites', JSON.stringify(favorites))

      this.setState({
        allFilms: allFilms,
        people: people,
        planets: planets,
        vehicles: vehicles,
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
