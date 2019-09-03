import React from 'react';
import { shallow } from 'enzyme';
import { LayoutUiDesktop } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LayoutUiDesktop />);
  expect(renderedComponent.find('.home-layout-ui-desktop').length).toBe(1);
});
