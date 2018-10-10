import React from 'react'
import { shallow } from 'enzyme'
import ScrollingText from './index'

describe('ScrollingText', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollingText />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('shoudl have default state', () => {
    wrapper = shallow(<ScrollingText />, { disableLifecycleMethods: true })

    expect(wrapper.state()).toMatchSnapshot()
  })
})