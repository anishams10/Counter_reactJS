import { useState } from 'react'

import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const [err, seterr] = useState("")

  function increment(){
    setCount(count+1)
    seterr("")
  }

  
  function decrement(){
    count != 0 ? setCount(count-1) : seterr("Minimum limit reached");
  }

  function toreset(){
    setCount(0)
    seterr("")
  }


  return (
    <div className='counter'>
      <h1 className='heading'>Counter</h1>
      <div className='countsect'>
        <h1 className='number'>{count}</h1>
        <p style={{color: 'white'}}>{err}</p>
      </div>
      
      <div className='btn-count'>
        
        <button onClick={decrement} className='dec'>- Decrement</button>
        <button onClick={toreset} className='reset'>Reset</button>
        <button onClick={increment} className='inc'>+ Increment</button>
        
      </div>
    </div>
  )
}

export default Counter;