import React from 'react';

import { shallow } from 'enzyme';
import Carousel from '../Carousel';
import CarouselButton from '../CarouselButton';

describe('Carousel', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousel />);
  });

  it('renders a <div>', () => {
    expect(wrapper.type()).toBe('div');
  });

  it('has initial slideIndex of 0', () => {
    expect(wrapper.state('slideIndex')).toBe(0);
  });

  it('renders a CarouselButton labeled `prev`', () => {
    expect(wrapper.find(CarouselButton).at(0).prop('children')).toBe('Prev');
  });

  it('renders a CarouselButton labeled `Next`', () => {
    expect(wrapper.find(CarouselButton).at(1).prop('children')).toBe('Next');
  });
});
