import React from 'react';
import { mount } from 'enzyme';
import { Header } from '../';

describe('Header', () => {
  it('should render', () => {
    const wrapper = mount(<Header className="custom-class" />);
    expect(wrapper).toMatchSnapshot();
  });
});
