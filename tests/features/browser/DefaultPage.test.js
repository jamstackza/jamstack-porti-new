import React from 'react';
import { shallow } from 'enzyme';
import { DefaultPage } from '../../../src/features/browser/DefaultPage';

describe('browser/DefaultPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      browser: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <DefaultPage {...props} />
    );

    expect(
      renderedComponent.find('.browser-default-page').length
    ).toBe(1);
  });
});
