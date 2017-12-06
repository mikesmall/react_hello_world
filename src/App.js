// bring in React and Component from React
import React, {Component} from 'react';

class Hello extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello world!</h1>
        <h3>It is time for T... Mr. T.</h3>
      </div>
    )
  }
}

export default Hello
