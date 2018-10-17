import React from 'react'
import { shallow , mount } from 'enzyme'
import CardContainer from './index'
import Card from '../Card'

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
                        removeFavorite={jest.fn()}
                      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should display the favorites default message if no favorites', () => {
    currentDisplay = 'favorites'
    wrapper = shallow(<CardContainer
                    cardContents={cardContents}
                    currentDisplay={currentDisplay}
                    addFavorite={jest.fn()}
                    removeFavorite={jest.fn()}
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
                      removeFavorite={jest.fn()}
                    />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should include individual card info in addFavorite function', () => {
    cardContents = [{ name: 'Luke Skywalker' },
                    { name: 'Leia Organa'},
                    { name: 'R2-D2'}];

    wrapper = mount(<CardContainer
                      cardContents={cardContents}
                      currentDisplay={currentDisplay}
                      addFavorite={jest.fn()}
                      removeFavorite={jest.fn()}
                    />);

    const spy = spyOn(wrapper.find(Card).instance(), 'addFavorite')

    wrapper.find(Card).find('img').simulate('click')
    wrapper.instance().forceUpdate()

    expect(spy).toHaveBeenCalled()
  })
});
