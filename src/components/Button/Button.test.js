import React from 'react'
import { shallow , mount } from 'enzyme'
import Button from './index'

describe('Button', () => {
  let wrapper;
  let label;
  let favorites;
  let handleNavClick;
  let isActive;

  beforeEach(() => {
    label = 'People';
    favorites = 2;
    handleNavClick = jest.fn();
    isActive = false;

    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be inactive by default', () => {
    expect(wrapper.find('.active')).toHaveLength(0);
  });

  it('should render navigation button', () => {
    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />);

    expect(wrapper.find('.People')).toHaveLength(1);
  });

  it('should render favorites button', () => {
    label = 'Favorites';
    wrapper = shallow(<Button label={label}
                              favorites={favorites}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />);

    expect(wrapper.find('.Favorites')).toHaveLength(1);
  });

  it('should call handleNavClick when category button clicked', () => {
    wrapper = mount(<Button
                      label={label}
                      handleNavClick={handleNavClick}
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
                      isActive={isActive}
                    />);

    wrapper.find('.Favorites').simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('should add "active" class if isActive', () => {
    isActive = true;
    wrapper = shallow(<Button label={label}
                      handleNavClick={handleNavClick}
                      isActive={isActive}
                      />);

    expect(wrapper.find('.active')).toHaveLength(1);
  });

  it('should add "active" class if favorites button isActive', () => {
    isActive = true;
    label='Favorites';
    wrapper = shallow(<Button label={label}
                      favorites={favorites}
                      handleNavClick={handleNavClick}
                      isActive={isActive}
                      />);

    expect(wrapper.find('.active')).toHaveLength(1);
  });
});
