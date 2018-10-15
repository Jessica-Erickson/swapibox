import React from 'react';
import PropTypes from 'prop-types';
import Card from './../Card';
import './CardContainer.css';

const CardContainer = ({ cardContents, currentDisplay }) => {
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
    cards = cardContents.map(item => {
      return <Card contents={item} currentDisplay={currentDisplay} key={item.name} />
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
  currentDisplay: PropTypes.string.isRequired
}

export default CardContainer;
