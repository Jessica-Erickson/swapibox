import React from 'react'
import { shallow , mount } from 'enzyme'
import Button from './index'

describe('Button', () => {
  let wrapper;
  let label;
  let favorites;
  let currentDisplay;
  let handleNavClick;
  let isActive;

  beforeEach(() => {
    label = 'People'
    favorites = []
    handleNavClick = jest.fn()
    currentDisplay = 'default'
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              currentDisplay={currentDisplay}
                              isActive={isActive}
                      />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should render favorites button', () => {
    wrapper = shallow(<Button label='Favorites'
                              favorites={favorites}
                              handleNavClick={handleNavClick}
                              currentDisplay={currentDisplay}
                              isActive={isActive}
                      />)

    expect(wrapper).toMatchSnapshot()
  });

  it('should call handleNavClick when category button clicked', () => {
    wrapper = mount(<Button
                      label={label}
                      handleNavClick={handleNavClick}
                      currentDisplay={currentDisplay}
                      isActive={isActive}
                    />);

    wrapper.find('.People').simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('should call handleNavClick when favorites button clicked', () => {
    label = 'Favorites';

    wrapper = mount(<Button
                      label={label}
                      favorites={favorites}
                      handleNavClick={handleNavClick}
                      currentDisplay={currentDisplay}
                      isActive={isActive}
                    />);

    wrapper.find('.Favorites').simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('should add "active" class if isActive', () => {
    isActive = true
    wrapper = shallow(<Button label={label}
                      handleNavClick={handleNavClick}
                      currentDisplay={currentDisplay}
                      isActive={isActive}
                      />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should add "active" class if favorites button isActive', () => {
    isActive = true
    label='Favorites'
    wrapper = shallow(<Button label={label}
                      favorites={favorites}
                      handleNavClick={handleNavClick}
                      currentDisplay={currentDisplay}
                      isActive={isActive}
                      />)

    expect(wrapper).toMatchSnapshot()
  })
})
