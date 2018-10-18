import React from 'react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { shallow , mount } from 'enzyme'
import CardContainer from './index'
import Card from '../Card'

describe('CardContainer', () => {
  let wrapper;
  let cardContents;
  let currentDisplay;
  let addFavorite;
  let removeFavorite;
  let favorites;

  beforeEach(() => {
    currentDisplay = 'default'
    cardContents = []
    addFavorite = jest.fn();
    removeFavorite = jest.fn();
    favorites = []
  });

  it('default landing page should match the snapshot', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={[
        { pathname: '/', key: 'testKey' }
      ]}>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('people page should match the snapshot with people cards', () => {
    currentDisplay = 'people'
    cardContents = [{ name: 'Luke Skywalker' },
                    { name: 'Leia Organa'},
                    { name: 'R2-D2'}];
    wrapper = mount(
      <MemoryRouter initialEntries={[
        { pathname: '/people', key: 'testKey' }
      ]}>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('planets page should match the snapshot with planets cards', () => {
    currentDisplay = 'planets'
    cardContents = [{ name: 'Tatooine' },
                    { name: 'Death Star'},
                    { name: 'Earth'}];
    wrapper = mount(
      <MemoryRouter initialEntries={[
        { pathname: '/planets', key: 'testKey' }
      ]}>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('vehicles page should match the snapshot with vehicles cards', () => {
    currentDisplay = 'vehicles'
    cardContents = [{ name: 'TIE Fighter' },
                    { name: 'Speeder'},
                    { name: 'AT-AT'}];
    wrapper = mount(
      <MemoryRouter initialEntries={[
        { pathname: '/vehicles', key: 'testKey' }
      ]}>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should display the favorites default message if no favorites', () => {
    currentDisplay = 'favorites'
    wrapper = mount(
      <MemoryRouter initialEntries={[
        { pathname: '/favorites', key: 'testKey' }
      ]}>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should display the favorites cards when favorites exist', () => {
    currentDisplay = 'favorites'
    cardContents = [{ name: 'Luke Skywalker' },
                    { name: 'Speeder'},
                    { name: 'Tatooine'}];
    wrapper = mount(
      <MemoryRouter initialEntries={[
        { pathname: '/favorites', key: 'testKey' }
      ]}>
        <CardContainer
          cardContents={cardContents}
          currentDisplay={currentDisplay}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favorites={favorites}
        />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });

});
