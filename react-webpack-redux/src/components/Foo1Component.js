'use strict';

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

require('styles//Foo1.sass');

class Foo1Component extends React.Component {
  render() {
    return (
            < ButtonToolbar > { /* Standard button */ } < Button > Default < /Button>

            { /* Provides extra visual weight and identifies the primary action in a set of buttons */ } < Button bsStyle = "primary" > Primary < /Button>

            { /* Indicates a successful or positive action */ } < Button bsStyle = "success" > Success < /Button>

            { /* Contextual button for informational alert messages */ } < Button bsStyle = "info" > Info < /Button>

            { /* Indicates caution should be taken with this action */ } < Button bsStyle = "warning" > Warning < /Button>

            { /* Indicates a dangerous or potentially negative action */ } < Button bsStyle = "danger" > Danger < /Button>

            { /* Deemphasize a button by making it look like a link while maintaining button behavior */ } < Button bsStyle = "link" > Link < /Button> < /ButtonToolbar>
    );
  }
}

Foo1Component.displayName = 'Foo1Component';

// Uncomment properties you need
// Foo1Component.propTypes = {};
// Foo1Component.defaultProps = {};

export default Foo1Component;
