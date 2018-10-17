import React from 'react';
import { shallow , mount } from 'enzyme';
import App from './index';
import * as API from '../../helper.js';

describe('App', () => {
  let wrapper;
  let mockData;
  let mockFavorite;

  beforeEach(() => {
    localStorage.clear()
    wrapper = shallow(<App />);
    mockData = {
      allFilms: [{}],
      people: [{}],
      planets: [{}],
      vehicles: [{}],
      favorites: [{}]
    }

    mockFavorite = {
      cardData: 'someData'
    }
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state', () => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should set localStorage', () => {
    wrapper.instance().setDataInLocalStorage(mockData)
    const expected = localStorage.length

    expect(expected).toEqual(5)
  })

  it('should get data', async () => {
    API.getFilms = jest.fn()
    API.getPeople = jest.fn()
    API.getPlanets = jest.fn()
    API.getVehicles = jest.fn()

    await wrapper.instance().getDataFromAPI()

    expect(API.getFilms).toHaveBeenCalled()
    expect(API.getPeople).toHaveBeenCalled()
    expect(API.getPlanets).toHaveBeenCalled()
    expect(API.getVehicles).toHaveBeenCalled()
  })

  it('should getStorage on refresh / subsequent mounts', () => {
    wrapper.instance().setDataInLocalStorage(mockData)

    wrapper = mount(<App />)

    expect(wrapper.state()).toMatchSnapshot()
  })

  it('should set favorites to [] if no favorites in localStorage', () => {
    mockData = {
      allFilms: [{}],
      people: [{}],
      planets: [{}],
      vehicles: [{}]
    }
    wrapper.instance().setDataInLocalStorage(mockData)

    wrapper = mount(<App />)

    expect(wrapper.state()).toMatchSnapshot()
  })

  it('should render the app if not Loading', () => {
    wrapper.setState({ isLoading: false });

    expect(wrapper).toMatchSnapshot();
  });

  it('should update category when a nav button is clicked', () => {
    expect(wrapper.state('currentDisplay')).toEqual('default');

    wrapper.instance().handleNavClick('people');

    expect(wrapper.state('currentDisplay')).toEqual('people');
  });

  it('should add favorites to state and localStorage when favorited', () => {
    Date.now = () => { return 181016 }

    wrapper.instance().addFavorite(mockFavorite)

    expect(wrapper.state()).toMatchSnapshot()
  })

  it('should remove favorites from state and localStorage when unfavorited', () => {
    wrapper.instance().removeFavorite(mockFavorite)

    expect(wrapper.state()).toMatchSnapshot()
  })
});
