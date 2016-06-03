/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Foo1Component from 'components//Foo1Component.js';

describe('Foo1Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Foo1Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('foo1-component');
  });
});
