import React from 'react'
import { shallow } from 'enzyme'
import Card from './index'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    wrapper = shallow(<Card />, { disableLifecycleMethods: true });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should become active when hilt is clicked', () => {
    wrapper = shallow(<Card />);

    expect(wrapper.state('isActive')).toEqual(false);

    wrapper.find('.hilt').simulate('click');

    expect(wrapper.state('isActive')).toEqual(true);

    wrapper.find('.hilt').simulate('click');

    expect(wrapper.state('isActive')).toEqual(false);
  });

  it('should change colors when user hovers over hilt', () => {
    wrapper = shallow(<Card />);
    const src1 = 'lightsaber-wt.png';
    const src2 = 'lightsaber-bk.png';

    expect(wrapper.state('src')).toEqual(src1);

    wrapper.find('.hilt').simulate('mouseOver');

    expect(wrapper.state('src')).toEqual(src2);

    wrapper.find('.hilt').simulate('mouseOut');

    expect(wrapper.state('src')).toEqual(src1);
  });
});
