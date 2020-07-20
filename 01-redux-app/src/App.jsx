import React from 'react';
import './App.css'


class App extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  render(){
    return(
      <div>
        <h2>Count: {this.state.count}</h2>
        <button>Decrement</button>
        <button>Increment</button>
      </div>
    )
  }
}

export default App