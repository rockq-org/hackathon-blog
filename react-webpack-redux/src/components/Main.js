require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    render() {
        return ( < div className = "index" >
            < img src = { yeomanImage }
            alt = "Yeoman Generator" / >
            < div className = "notice" > Please edit < code > src / components / Main.js < /code> to get started!</div >

            < ButtonToolbar > { /* Standard button */ } < Button > Default < /Button>

            { /* Provides extra visual weight and identifies the primary action in a set of buttons */ } < Button bsStyle = "primary" > Primary < /Button>

            { /* Indicates a successful or positive action */ } < Button bsStyle = "success" > Success < /Button>

            { /* Contextual button for informational alert messages */ } < Button bsStyle = "info" > Info < /Button>

            { /* Indicates caution should be taken with this action */ } < Button bsStyle = "warning" > Warning < /Button>

            { /* Indicates a dangerous or potentially negative action */ } < Button bsStyle = "danger" > Danger < /Button>

            { /* Deemphasize a button by making it look like a link while maintaining button behavior */ } < Button bsStyle = "link" > Link < /Button> < /ButtonToolbar>

            < /div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
