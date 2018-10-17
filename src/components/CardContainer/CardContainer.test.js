import React from 'react'
import { shallow , mount } from 'enzyme'
import CardContainer from './index'

describe('CardContainer', () => {
  let wrapper;
  let cardContents;
  let currentDisplay;

  beforeEach(() => {
    currentDisplay = 'default'
    cardContents = []
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<CardContainer
                        cardContents={cardContents}
                        currentDisplay={currentDisplay}
                        addFavorite={jest.fn()}
                      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display the Favorites default message if no Favorites', () => {
    currentDisplay = 'favorites'
    wrapper = shallow(<CardContainer
                    cardContents={cardContents}
                    currentDisplay={currentDisplay}
                    addFavorite={jest.fn()}
                  />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render cards when it gets contents', () => {
    cardContents = [{ name: 'Luke Skywalker' },
                    { name: 'Leia Organa'},
                    { name: 'R2-D2'}];

    wrapper = mount(<CardContainer
                      cardContents={cardContents}
                      currentDisplay={currentDisplay}
                      addFavorite={jest.fn()}
                    />);

    expect(wrapper).toMatchSnapshot();
  });
});
