// bring in React and Component from React
import React, {Component} from 'react';

class Hello extends Component {
  // what should happen when the component is first created
  constructor (props) {
    super()
    this.state = {
      moodPoints: 1 // initializes this.state.moodPoints to be 1
    }
  }
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>It is time for treats.</h3>
        <p>Also, you are {this.props.age} years old.</p>
        <p>How about some {this.props.treats[0]}?</p>
        <p>On a scale of 1 to 10, you are this happy: {this.state.moodPoints}</p>
      </div>
    )
  }
}

export default Hello

// note how similar returning 'state' looks to accessing props:
