import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './App.js';

var cat = {
  catName: "Mavis",
  catAge: 13,
  favourites: [
    "tuna",
    "chips",
    "coconut oil"
  ]
}

ReactDOM.render(
  <Hello
    name={cat.catName}
    age={cat.catAge}
    treats={cat.favourites}
  />,
  document.getElementById('root')
)
