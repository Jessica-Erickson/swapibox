import React from 'react';
import * as API from '../../helper.js';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardContainer.css';

const CardContainer = ({ favorites , category , addFavorite , removeFavorite }) => {
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
    getContents();
    return makeCards();
  } else if (category === 'planets') {
    getContents();
    return makeCards();
  } else if (category === 'vehicles') {
    getContents();
    return makeCards();
  }

  const getContents = async () => {
    if (!localStorage.getItem(category)) {
      contents = JSON.parse(localStorage.getItem(category));
    } else {
      contents = await API[category]();
    }
  }

  const makeCards = () => {
    if (typeof contents === 'array') {
      return contents.map((item) => {
        return <Card
                  contents={item}
                  addFavorite={() => addFavorite(item)}
                  removeFavorite={() => removeFavorite(item.id)}
                  isActive={favorites.includes(item)}
                  key={item.name} />
      });
    } else {
      return <h2>Data not found. Please try again later.</h2>
    }
  }
}


CardContainer.propTypes = {
  favorites: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired
}

export default CardContainer;