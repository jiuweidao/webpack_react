import React from 'react';
import ReactDom from 'react-dom';

import Home from './pages/Home';

const element = <h1>Hello, world</h1>;
ReactDom.render(
  <Home/>
    ,
    document.getElementById('root')
)