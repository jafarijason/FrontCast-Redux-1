import React from 'react';
import './App.css'


class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment() {
    console.log("Incremant");
  }
  decrement() {
    console.log("decrement")
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.decrement}>Decrement</button>
        <button  onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default App