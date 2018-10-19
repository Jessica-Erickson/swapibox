import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ScrollingText from '../ScrollingText/ScrollingText.js';
import Header from '../Header/Header.js';
import CardContainer from '../CardContainer/CardContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem('favorites') !== null) {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({ favorites });
    }
  }

  loadingCheck = () => {
    this.setState({ isLoading: false });
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

  render() {
    const { addFavorite , removeFavorite } = this;
    const { isLoading , favorites } = this.state;
    const ready = !isLoading;

    return (
      <div className={ ready ? 'App' : 'loading' }>
        <ScrollingText
          display={ready}
          loadingCheck={() => {
            this.loadingCheck('filmsLoading');
          }} />
        <Header 
          display={ready}
          favorites={favorites.length} />
        <Route exact path='/' render={() => (
          <h2 className={ready ? 'default' : 'display-none'}>
            Select a Category or Favorites
          </h2>
        )} />
        <Route exact path='/favorites' render={() => (
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='favorites' />
        )} />
        <Route exact path='/people' render={() => (
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='people' />
        )} />
        <Route exact path='/planets' render={() => (
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='planets' />
        )} />
        <Route exact path='/vehicles' render={() => (
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='vehicles' />
        )} />
      </div>
    )
  }
}

export default App;