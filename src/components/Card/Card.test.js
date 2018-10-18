import React from 'react'
import { shallow, mount } from 'enzyme'
import Card from './index'

describe('Card', () => {
  let wrapper;
  let contents;
  let addFavorite;
  let removeFavorite;

  beforeEach(() => {
    contents = { name: 'Luke Skywalker',
                 homeworld: 'Tatooine',
                 species: 'Human',
                 homePop: '200000' };

    addFavorite = jest.fn()
    removeFavorite = jest.fn()

    wrapper = shallow(<Card
                        contents={contents}
                        currentDisplay='people'
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                        isActive={false}
                      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    wrapper = shallow(<Card contents={contents}
                            currentDisplay='people'
                            addFavorite={addFavorite}
                            removeFavorite={removeFavorite}
                            isActive={false}
                      />,
                      { disableLifecycleMethods: true }
                     );

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should toggle isActive on when hilt is clicked', () => {
    wrapper.find('img').simulate('click');

    expect(wrapper).toMatchSnapshot();

    // it should toggle isActive off when hilt is clicked
    wrapper.find('img').simulate('click');

    expect(wrapper).toMatchSnapshot();
  });

  it('should change colors when user hovers over hilt', () => {
    wrapper.find('img').simulate('mouseOver');

    expect(wrapper).toMatchSnapshot();

    // it should change colors when user hovers over hilt
    wrapper.find('img').simulate('mouseOut');

    expect(wrapper).toMatchSnapshot();
  });

  it('should checkActive when clicked', () => {
    const spy = spyOn(wrapper.instance(), 'checkActive')
    wrapper.find('img').simulate('click');

    expect(spy).toHaveBeenCalled()
  })

  it('should addFavorite if card is not active', () => {
    wrapper.instance().checkActive();

    expect(addFavorite).toHaveBeenCalled()
  })

  it('should removeFavorite if card isActive', () => {
    wrapper = shallow(<Card
                        contents={contents}
                        currentDisplay='people'
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                        isActive={true}
                      />);

    wrapper.instance().checkActive();

    expect(removeFavorite).toHaveBeenCalled()
  })
});
