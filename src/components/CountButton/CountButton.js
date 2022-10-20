import React, { useState, useEffect } from "react"
import './CountButton.css'

function CountButton(props) {    // or const CountButton = () => {}
  
  const [count, setCount] = useState(0)
  // console.log(useState(0))

  function handleClick() {
    setCount(count + props.incrementBy)
  }

  useEffect(() => {
    console.log('Called when the component mounts')
  }, []) // useEffect must have the array arguement 

  useEffect(() => {
    console.log('Called when the component mounts or the count is updated')
  }, [count])

  useEffect(() => {
    if(count === 10) {
      setCount(0)
    }
  }, [count])



  return (
  <div>
    <button onClick={handleClick}>+{props.incrementBy}</button>
    <div className="count-display">{count}</div>
  </div>
  )
}

export default CountButton