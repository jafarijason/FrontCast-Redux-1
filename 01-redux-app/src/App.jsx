import React from 'react';
import './App.css'


class App extends React.Component {


  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState((prevstate) => {
      const nextState = {
        count: prevstate.count + 1
      }
      return nextState
    })
    console.log("Incremant");
  }
  decrement() {
    this.setState((prevstate) => {
      const nextState = {
        count: prevstate.count - 1
      }
      return nextState
    })
    console.log("decrement")
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App