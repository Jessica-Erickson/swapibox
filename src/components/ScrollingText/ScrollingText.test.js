import React from 'react'
import { shallow , mount } from 'enzyme'
import ScrollingText from './index'

describe('ScrollingText', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollingText />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    wrapper = shallow(<ScrollingText />, { disableLifecycleMethods: true });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should know which movie text to show', () => {
    expect(wrapper.state('film')).toEqual(0);
  });

  it('should get a new number between -1 & 8', () => {
    wrapper.instance().changeText();

    expect(wrapper.state('film')).toBeGreaterThan(-1);
    expect(wrapper.state('film')).toBeLessThan(8);
  });

  it('should set state with a new random number', () => {
    const initialState = 0;
    const expected = 3;

    Math.random = () => { return 0.5 }

    wrapper.setState({ film: initialState });

    wrapper.instance().changeText()

    expect(wrapper.state('film')).toEqual(expected)
  });

  it('should call changeText on animation end', () => {
    wrapper = mount(<ScrollingText />);

    const spy = spyOn(wrapper.instance(), 'changeText');

    wrapper.instance().forceUpdate();

    wrapper.find('.ScrollingText').simulate('animationend');

    expect(spy).toHaveBeenCalled();
  });
});