require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import Foo1Component from './Foo1Component';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component<any, any> {
    
    constructor(props){
        super(props);
        super.state = {count: parseInt(props.initialVal)};
        console.log(props)
    }
    
    render() {
        return ( 
            < div className = "index" >
              <Foo1Component> </Foo1Component>
            < img src = { yeomanImage }
            alt = "Yeoman Generator" / >
            < div className = "notice" > Please edit < code > src / components / Main.js < /code> to get started!</div >
            < /div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
