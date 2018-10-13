import React from 'react'
import { shallow , mount } from 'enzyme'
import ScrollingText from './index'

describe('ScrollingText', () => {
  let wrapper;
  let allFilms;

  beforeEach(() => {
    allFilms = [
          {title: 'Star Wars 1',
            releaseDate: '1977',
            openingCrawl: 'This is opening crawl 1'},
          {title: 'Star Wars 2',
            releaseDate: '1978',
            openingCrawl: 'This is opening crawl 2'},
          {title: 'Star Wars 3',
            releaseDate: '1979',
            openingCrawl: 'This is opening crawl 3'},
          {title: 'Star Wars 7',
            releaseDate: '1980',
            openingCrawl: 'This is opening crawl 7'}
        ]
    wrapper = shallow(<ScrollingText allFilms={allFilms} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    wrapper = shallow(<ScrollingText allFilms={allFilms} />, { disableLifecycleMethods: true });

    expect(wrapper.state()).toMatchSnapshot();
  });

  it('should know which movie text to show', () => {
    expect(wrapper.state('film')).toEqual(0);
  });

  it('should get a new number between -1 & 8', () => {
    wrapper = mount(<ScrollingText allFilms={allFilms} />);
    
    wrapper.instance().changeText();

    expect(wrapper.state('film')).toBeGreaterThan(-1);
    expect(wrapper.state('film')).toBeLessThan(8);
  });

  it('should set state with a new random number', () => {
    const initialState = 0;
    const expected = 3;

    Math.random = () => { return 0.5 }

    wrapper.setState({ film: initialState });

    wrapper.instance().changeText()

    expect(wrapper.state('film')).toEqual(expected)
  });

  it('should call changeText on animation end', () => {
    wrapper = mount(<ScrollingText allFilms={allFilms} />);

    const spy = spyOn(wrapper.instance(), 'changeText');

    wrapper.instance().forceUpdate();

    wrapper.find('.scrolling-wrapper').simulate('animationend');

    expect(spy).toHaveBeenCalled();
  });
});