import React from 'react'
import { shallow , mount } from 'enzyme'
import Button from './index'

describe('Button', () => {
  let wrapper;
  let label;
  let currentDisplay;
  let handleNavClick;

  beforeEach(() => {
    currentDisplay = 'default'
    label = 'People'
    handleNavClick = jest.fn()
    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              currentDisplay={currentDisplay}
                      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have default state', () => {
    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              currentDisplay={currentDisplay}
                      />, { disableLifecycleMethods: true })

    expect(wrapper.state()).toMatchSnapshot()
  });

  it('should render favorites button', () => {
    const favorites = []
    wrapper = shallow(<Button label='Favorites'
                              favorites={favorites}
                              handleNavClick={handleNavClick}
                              currentDisplay={currentDisplay}
                      />)

    expect(wrapper.find('.Favorites')).toHaveLength(1)
  });

  it('should call handleNavClick when category button clicked', () => {
    const handleNavClick = jest.fn();
    wrapper = mount(<Button
                      label={label}
                      handleNavClick={handleNavClick}
                      currentDisplay={currentDisplay}
                    />);

    wrapper.find('.People').simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('should call handleNavClick when favorites button clicked', () => {
    const handleNavClick = jest.fn();
    const favorites = [];
    label = 'Favorites';

    wrapper = mount(<Button
                      label={label}
                      favorites={favorites}
                      handleNavClick={handleNavClick}
                      currentDisplay={currentDisplay}
                    />);

    wrapper.find('.Favorites').simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('when a user clicks different nav button, it should toggle the state of the old and new buttons', () => {

  })
})
