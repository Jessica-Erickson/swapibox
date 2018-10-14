import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

describe('Card', () => {
  let wrapper;
  let contents;

  beforeEach(() => {
    contents = { name: 'Luke Skywalker',
                 homeworld: 'Tatooine',
                 species: 'Human',
                 homePop: '200000' };

    wrapper = shallow(<Card contents={contents} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    wrapper = shallow(<Card contents={contents} />,
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
});
