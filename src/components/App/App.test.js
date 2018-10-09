import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

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