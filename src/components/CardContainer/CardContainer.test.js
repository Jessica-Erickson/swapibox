import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { shallow , mount } from 'enzyme'
import CardContainer from './index'
import Card from '../Card'

describe('CardContainer', () => {
  let wrapper;
  let cardContents;
  let currentDisplay;
  let addFavorite;
  let removeFavorite;
  let isActive;
  let favorites;

  beforeEach(() => {
    currentDisplay = 'default'
    cardContents = []
    addFavorite = jest.fn();
    removeFavorite = jest.fn();
    favorites = []
    isActive = false;
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<CardContainer
                        cardContents={cardContents}
                        currentDisplay={currentDisplay}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                        isActive={isActive}
                        favorites={favorites}
                      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display the favorites default message if no favorites', () => {
    currentDisplay = 'favorites'
    wrapper = shallow(<CardContainer
                    cardContents={cardContents}
                    currentDisplay={currentDisplay}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    isActive={isActive}
                    favorites={favorites}
                  />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render cards when it gets contents', () => {
    cardContents = [{ name: 'Luke Skywalker' },
                    { name: 'Leia Organa'},
                    { name: 'R2-D2'}];

    wrapper = mount(
      <BrowserRouter>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          isActive={isActive}
          favorites={favorites}
        />
      </BrowserRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
