import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button', () => {
  let wrapper;
  let label;

  beforeEach(() => {
    label='People'
    wrapper = shallow(<Button label={label}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have default state', () => {
    wrapper = shallow(<Button label={label} />, { disableLifecycleMethods: true })

    expect(wrapper.state()).toMatchSnapshot()
  })

  it('should render favorites button', () => {
    const favorites = []
    wrapper = shallow(<Button label='Favorites' favorites={favorites} />)

    expect(wrapper.find('.Favorites')).toHaveLength(1)
  })
})