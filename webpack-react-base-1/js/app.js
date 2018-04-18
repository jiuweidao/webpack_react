import ReactDOM from 'react-dom';
import React from 'react'
import Publisher from "./components/Publisher/Publisher.jsx";

const element = <h1>Hello, world</h1>;
ReactDOM.render(
    <Publisher/>,
    document.getElementById('root')
)
;

/*
* const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));*/