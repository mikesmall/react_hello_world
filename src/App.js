// bring in React and Component from React
import React, {Component} from 'react';

// define the Hello component
class Hello extends Component {

  // what should happen when the component is first created
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // define an initial state
    this.state = {
      moodPoints: 1 // initializes this.state.moodPoints to be 1
    }

  }

  // a trigger event to change the mood counter (increase by 1):
  increaseMood(e) {
    this.setState({
      moodPoints: this.state.moodPoints +1
    });
  }

  // render/return UI:
  render () {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <h3>It is time for treats.</h3>
        <p>Also, you are {this.props.age} years old.</p>
        <p>Want some {this.props.treats[0]}?</p>
        <p>On a scale of 1 to 10, you are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up, kitten!</button>
      </div>
    )
  }
}

export default Hello
