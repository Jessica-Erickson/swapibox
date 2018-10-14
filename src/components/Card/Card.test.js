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
    wrapper = shallow(<Card contents={contents} />, { disableLifecycleMethods: true });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should toggle isActive on when hilt is clicked', () => {
    wrapper.find('img').simulate('click');

    expect(wrapper).toMatchSnapshot();

    it('should toggle isActive off when hilt is clicked', () => {
      wrapper.find('img').simulate('click');

      expect(wrapper).toMatchSnapshot();
    }
  });

  it('should change colors when user hovers over hilt', () => {
    const src1 = 'lightsaber-wt.png';
    const src2 = 'lightsaber-bk.png';

    expect(wrapper.state('src')).toEqual(src1);

    wrapper.find('.hilt').simulate('mouseOver');

    expect(wrapper.state('src')).toEqual(src2);

    wrapper.find('.hilt').simulate('mouseOut');

    expect(wrapper.state('src')).toEqual(src1);
  });
});
