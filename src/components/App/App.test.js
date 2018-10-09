import React from 'react';
import App from './index';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })

    expect(wrapper.state()).toMatchSnapshot()
  })
})