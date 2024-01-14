import { useState } from 'react'
import './App.css'
import Header from './Component/Header'

function App() {
  const [num, setNum] = useState(0);
  function inc(){
    setNum(num + 1);
  }
  function dec(){
    setNum(num - 1);
  }
  

  return (
    <>
    <div className="Header">
    <Header/>
    </div>
    
        <p className="count">{num}</p>
        <div className="btn">
            <button className="but" onClick={inc}>increment</button>
            <button className="but" onClick={dec}> decrement</button>
            
        </div>
    
    </>
  )
}

export default App
