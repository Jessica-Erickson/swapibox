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
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      default: [],
      currentDisplay: 'default'
    }
  }

  handleNavClick = (category) => {
    this.setState({ currentDisplay: category });
  }

  addFavorite = (newFavorite) => {
    const favorites = [...this.state.favorites, newFavorite]
    this.setState({ favorites })
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  removeFavorite = (id) => {
    const filteredFaves = this.state.favorites.filter(fave => fave.id !==id)

    this.setState({ favorites: filteredFaves })
    localStorage.setItem('favorites', JSON.stringify(filteredFaves))
  }

  getDataFromLocalStorage = () => {
    const storage = Object.keys(this.state).reduce((stored, list) => {
      if (Array.isArray(this.state[list]) && list !== 'default') {
        stored[list] = JSON.parse(localStorage.getItem(list)) || []
      }

      return stored;
    }, {})

    return storage
  }

  setDataInLocalStorage = (allData) => {
    Object.keys(allData).forEach(collection => {
      localStorage.setItem(collection, JSON.stringify(allData[collection]))
    })
  }

  getDataFromAPI = async () => {
    const allData = {
      allFilms: await API.getFilms(),
      people: await API.getPeople(),
      planets: await API.getPlanets(),
      vehicles: await API.getVehicles()
    }

    return allData
  }

  async componentDidMount() {
    if (localStorage.length) {
      this.setState({
        ...this.getDataFromLocalStorage(),
        isLoading: false
      });
    }
    else {
      const allData = await this.getDataFromAPI()

      this.setDataInLocalStorage(allData)

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
            addFavorite={this.addFavorite}
            removeFavorite={this.removeFavorite}
          />
        </div>
      );
    }
  }
}

export default App;
