import React from 'react';
import { shallow } from 'enzyme';
import { LayoutUiMobile } from '../../../src/features/home';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LayoutUiMobile />);
  expect(renderedComponent.find('.home-layout-ui-mobile').length).toBe(1);
});
