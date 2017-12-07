import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var cat = {
  catName: "Mavis",
  catAge: 13
}

ReactDOM.render(
  <Hello
    name={cat.catName}
    age={cat.catAge}
  />,
  document.getElementById('root')
)
