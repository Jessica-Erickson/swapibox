import React from 'react';
import './CardContainer.css';
import PropTypes from 'prop-types';
import Card from './../Card';

const CardContainer = ({ cardContents }) => {
  let cards;

  if ( cardContents[0] === '') {
    cards = <h1 className="default">Select a Category!</h1>;
  } else {
    cards = cardContents.map(thingy => {
      return <Card contents={thingy} />
    })
  }

  return (
    <main className="CardContainer">
      {
        cards
      }
    </main>
  );
}

CardContainer.propTypes = {
  cardContents: PropTypes.array.isRequired
}

export default CardContainer;
