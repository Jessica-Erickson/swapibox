import React from 'react';
import * as API from '../../helper.js';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardContainer.css';

const CardContainer = async ({ favorites , category , addFavorite , removeFavorite }) => {
  let contents;

  if (favorites.length === 0 && category === 'favorites') {
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
  } else if (category === 'favorites') {
    contents = favorites;
    return makeCards();
  } else if (category === 'people') {
    contents = await API.getPeople();
    return makeCards();
  } else if (category === 'planets') {
    contents = await API.getPlanets();
    return makeCards();
  } else if (category === 'vehicles') {
    contents = await API.getVehicles();
    return makeCards();
  }

  const makeCards = () => {
    return contents.map((item) => {
      return 
        <Card
          contents={item}
          addFavorite={() => addFavorite(item)}
          removeFavorite={() => removeFavorite(item.id)}
          isActive={favorites.includes(item)}
          key={item.name} />
    });
  }
}


CardContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
}

export default CardContainer;