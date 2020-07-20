import React from 'react'

import './Counter.css'

const Counter = ({value, onIncrement, onDecrement}) => {
  
  return ( 
      <div>
        <h2>Count: {value}</h2>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onIncrement}>Increment</button>
      </div>
   );
}
 
export default Counter;