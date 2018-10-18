import React from 'react'
import { BrowserRouter } from 'react-router-dom'
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
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />)
    expect(wrapper).toMatchSnapshot()
  });

  it('should render favorites button', () => {
    label = 'Favorites';
    wrapper = shallow(<Button label={label}
                              favorites={favorites}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />);

    expect(wrapper).toMatchSnapshot()
  });

  it('should call handleNavClick when category button clicked', () => {
    wrapper = mount(
      <BrowserRouter>
        <Button
          label={label}
          handleNavClick={handleNavClick}
          isActive={isActive}
        />
      </BrowserRouter>
    );


    wrapper.find('.people').first().simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('should call handleNavClick when favorites button clicked', () => {
    label = 'Favorites';
        wrapper = mount(
      <BrowserRouter>
        <Button
          label={label}
          favorites={favorites}
          handleNavClick={handleNavClick}
          isActive={isActive}
        />
      </BrowserRouter>
    );

    wrapper.find('.favorites').first().simulate('click');

    expect(handleNavClick).toHaveBeenCalled();
  });

  it('should add "active" class if isActive', () => {
    isActive = true;
    wrapper = shallow(<Button label={label}
                      handleNavClick={handleNavClick}
                      isActive={isActive}
                      />);

    expect(wrapper).toMatchSnapshot()
  })

  it('should add "active" class if favorites button isActive', () => {
    isActive = true;
    label='Favorites';
    wrapper = shallow(<Button label={label}
                      favorites={favorites}
                      handleNavClick={handleNavClick}
                      isActive={isActive}
                      />);

    expect(wrapper).toMatchSnapshot()
  })
})
