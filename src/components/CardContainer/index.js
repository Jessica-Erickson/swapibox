import React from 'react';
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import Card from './../Card';
import './CardContainer.css';

const CardContainer = ({ cardContents, currentDisplay, addFavorite, removeFavorite, favorites }) => {

  const checkFaves = () => {
    if ( currentDisplay === 'favorites' && cardContents.length === 0) {
      return (
        <div>
          <h2 className="favorites-default">
            You currently don't have any favorites.
          </h2>
          <p className="favorites-default-text">
            Click on the lightsaber in the top right corner of a card to favorite it.
          </p>
        </div>
      )
    }
    else {
      return makeCards()
    }
  }

  const makeCards = () => {
    return cardContents.map((item) => {
      return <Card
                contents={item}
                currentDisplay={currentDisplay}
                addFavorite={() => addFavorite(item)}
                removeFavorite={() => removeFavorite(item.id)}
                isActive={favorites.includes(item)}
                key={item.name} />
    });
  }

  return (
    <main className="CardContainer">
      <Route exact path='/' render={ () => (
        <h2 className="default">Select a Category or Favorites</h2>
      )}/>
      <Route exact path='/favorites' render={ () => (
        checkFaves()
      )}/>
      <Route exact path='/people' render={ () => (
        makeCards()
      )}/>
      <Route exact path='/planets' render={ () => (
        makeCards()
      )}/>
      <Route exact path='/vehicles' render={ () => (
        makeCards()
      )}/>
    </main>
  );
}

CardContainer.propTypes = {
  cardContents: PropTypes.array.isRequired,
  currentDisplay: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired
}

export default CardContainer;
