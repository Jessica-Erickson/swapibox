import React, { Component } from 'react';
import * as API from '../../helper.js';
import PropTypes from 'prop-types';
import Card from '../Card';
import './CardContainer.css';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      contents: [],
      isLoading: true
    }
  }

  componentDidMount = async () => {
    const { category , favorites } = this.props;
    let contents;
    if (localStorage.getItem(category) !== null) {
      contents = JSON.parse(localStorage.getItem(category));
    } else if (category === 'favorites') {
      contents = favorites;
    } else {
      contents = await API[category]();
      localStorage.setItem(category, JSON.stringify(contents));
    }
    this.setState({ contents , isLoading: false });
  }

  makeCards = (cardContents, category, addFavorite, removeFavorite, favorites) => {
    if (cardContents !== undefined) {
      return cardContents.map((item) => {
        return <Card
                  contents={item}
                  currentDisplay={category}
                  addFavorite={() => addFavorite(item)}
                  removeFavorite={() => removeFavorite(item.id)}
                  isActive={favorites.includes(item)}
                  key={item.name} />
      });
    } else {
      return <h2>Data not found. Please try again later.</h2>
    }
  }

  render() {
    const { favorites , category , addFavorite , removeFavorite } = this.props;
    const { contents , isLoading } = this.state;

    if (isLoading) {
      return <div className='loading'></div>
    } else if (favorites.length === 0 && category === 'favorites') {
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
      return this.makeCards(favorites, category, addFavorite, removeFavorite, favorites);
    } else {
      return this.makeCards(contents, category, addFavorite, removeFavorite, favorites);
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