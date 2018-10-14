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
  });

  it('should match the snapshot', () => {
    wrapper = shallow(<Button label={label}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />)
    expect(wrapper).toMatchSnapshot()
  });

>>>>>>> Refactor Button tests to multiple snapshots instead of chai syntax
  it('should render favorites button', () => {
    label = 'Favorites';
    wrapper = shallow(<Button label={label}
                              favorites={favorites}
                              handleNavClick={handleNavClick}
                              isActive={isActive}
                      />);

<<<<<<< HEAD
    expect(wrapper.find('.Favorites')).toHaveLength(1);
=======
    expect(wrapper).toMatchSnapshot()
>>>>>>> Refactor Button tests to multiple snapshots instead of chai syntax
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

<<<<<<< HEAD
    expect(wrapper.find('.active')).toHaveLength(1);
  });
=======
    expect(wrapper).toMatchSnapshot()
  })
>>>>>>> Refactor Button tests to multiple snapshots instead of chai syntax

  it('should add "active" class if favorites button isActive', () => {
    isActive = true;
    label='Favorites';
    wrapper = shallow(<Button label={label}
                      favorites={favorites}
                      handleNavClick={handleNavClick}
                      isActive={isActive}
                      />);

<<<<<<< HEAD
    expect(wrapper.find('.active')).toHaveLength(1);
  });
});
=======
    expect(wrapper).toMatchSnapshot()
  })
})
>>>>>>> Refactor Button tests to multiple snapshots instead of chai syntax
