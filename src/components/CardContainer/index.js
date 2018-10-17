import React from 'react';
import PropTypes from 'prop-types';
import Card from './../Card';
import './CardContainer.css';

const CardContainer = ({ cardContents, currentDisplay, addFavorite, removeFavorite, favorites }) => {
  let cards;

  if ( currentDisplay === 'favorites' && cardContents.length === 0) {
    cards = (
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
  else if ( cardContents.length === 0 ) {
    cards = <h2 className="default">Select a Category or Favorites</h2>;
  }
  else {
    cards = cardContents.map((item, index) => {
      const newFave = {...item, id: `${item.name}-${index}`}
      const match = favorites.find(item => item.id === newFave.id)

      return <Card
                contents={item}
                currentDisplay={currentDisplay}
                addFavorite={() => addFavorite(newFave)}
                removeFavorite={() => removeFavorite(newFave.id)}
                isActive={match !== undefined}
                id={`${item.name}-${index}`}
                key={item.name} />
    });
  }

  return (
    <main className="CardContainer">
      { cards }
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
