import React from 'react'
import Header from './index'
import { shallow } from 'enzyme'

describe('Header', () => {
  let wrapper;
  let favorites;

  beforeEach(() => {
    favorites = []
    wrapper = shallow(<Header favorites={favorites} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})