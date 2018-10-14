import React from 'react'
import Header from './index'
import { shallow } from 'enzyme'

describe('Header', () => {
  let wrapper;
  let favorites;
  let handleNavClick;
  let currentDisplay;

  beforeEach(() => {
    favorites = 0;
    handleNavClick = jest.fn();
    currentDisplay = 'default';
    wrapper = shallow(<Header
                        favorites={favorites}
                        handleNavClick={handleNavClick}
                        currentDisplay={currentDisplay}
                      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});