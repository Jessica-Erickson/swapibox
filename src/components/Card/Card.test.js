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

  it('should become active when clicked', () => {
    wrapper = shallow(<Card />);

    expect(wrapper.state('isActive')).toEqual(false);

    wrapper.find('.hilt').simulate('click');

    expect(wrapper.state('isActive')).toEqual(true);
  })
});
