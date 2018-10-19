import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ScrollingText from '../ScrollingText';
import Header from '../Header';
import CardContainer from '../CardContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [],
      filmsLoading: true,
      peopleLoading: true,
      planetsLoading: true,
      vehiclesLoading: true
    }
  }

  componentDidMount = () => {
    if (!localStorage.getItem('favorites')) {
      const favorites = JSON.parse(localStorage.getItem('favorites'));
      this.setState({ favorites });
    }
  }

  loadingCheck = (category) => {
    this.setState({ [category]: false });
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
    const { filmsLoading, peopleLoading, planetsLoading, vehiclesLoading, favorites } = this.state;
    const ready = !filmsLoading && !peopleLoading && !planetsLoading && !vehiclesLoading;

    return (
      <div className={ ready ? 'App' : 'loading' }>
        <ScrollingText
          display={ready}
          loadingCheck={() => {
            loadingCheck('filmsLoading');
          }} />
        <Header 
          display={ready}
          favorites={favorites.length} />
        <Route exact path='/' render={() => {
          <h2 className="default">Select a Category or Favorites</h2>
        }}>
        <Route exact path='/favorites' render={() => {
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='favorites' />
        }} />
        <Route exact path='/people' render={() => {
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            loadingCheck={() => {
              loadingCheck('peopleLoading');
            }}
            category='people' />
        }} />
        <Route exact path='/planets' render={() => {
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            loadingCheck={() => {
              loadingCheck('planetsLoading');
            }}
            category='planets' />
        }} />
        <Route exact path='/vehicles' render={() => {
          <CardContainer 
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            loadingCheck={() => {
              loadingCheck('vehiclesLoading');
            }}
            category='vehicles' />
        }} />
      </div>
    )
  }
}

export default App;