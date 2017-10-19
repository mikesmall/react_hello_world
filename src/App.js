// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello World!</h1>
        <h3>It is time for tea.</h3>
      </div>
    )
  }
}

export default Hello



// Initial components:

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="The React logo. It's spinning." />
//           <h1 className="App-title">Hi Mike. Welcome to React!</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p className="App-intro">
//           Mavis is the best!
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
