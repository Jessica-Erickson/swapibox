import React from 'react'
import { shallow , mount } from 'enzyme'
import CardContainer from './index'

describe('CardContainer', () => {
  let wrapper;
  let cardContents;

  beforeEach(() => {
    cardContents = []
    wrapper = shallow(<CardContainer cardContents={cardContents} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render cards when it gets contents', () => {
    cardContents = [{ name: 'Luke Skywalker' },
                    { name: 'Leia Organa'},
                    { name: 'R2-D2'}];

    wrapper = mount(<CardContainer cardContents={cardContents} />);

    expect(wrapper).toMatchSnapshot();
  });
});
