import React from 'react';
import './CardContainer.css';
import PropTypes from 'prop-types';

const CardContainer = (props) => {
  return (
    <main className="CardContainer">
    </main>
  );
}

CardContainer.propTypes = {
  cardContents: PropTypes.array.isRequired
}

export default CardContainer;
