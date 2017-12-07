// bring in React and Component from React
import React, {Component} from 'react';

class Hello extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>It is time for treats.</h3>
        <p>Also, you are {this.props.age} years old.</p>
      </div>
    )
  }
}

export default Hello
