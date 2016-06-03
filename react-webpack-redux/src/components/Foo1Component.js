'use strict';

import React from 'react';

require('styles//Foo1.sass');

class Foo1Component extends React.Component {
  render() {
    return (
      <div className="foo1-component">
       sooo
      </div>
    );
  }
}

Foo1Component.displayName = 'Foo1Component';

// Uncomment properties you need
// Foo1Component.propTypes = {};
// Foo1Component.defaultProps = {};

export default Foo1Component;
