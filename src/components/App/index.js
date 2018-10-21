import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as API from '../../helper.js';
import ScrollingText from '../ScrollingText';
import Header from '../Header';
import CardContainer from '../CardContainer';
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
          fetchCall={API.films}
          loadingCheck={() => {
            this.loadingCheck();
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
            display={ready}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='favorites' />
        )} />
        <Route exact path='/people' render={() => (
          <CardContainer
            fetchCall={API.people}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='people' />
        )} />
        <Route exact path='/planets' render={() => (
          <CardContainer 
            fetchCall={API.planets}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            category='planets' />
        )} />
        <Route exact path='/vehicles' render={() => (
          <CardContainer
            fetchCall={API.vehicles} 
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