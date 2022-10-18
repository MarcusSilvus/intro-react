import React, { useState } from "react"
import './CountButton.css'

function CountButton(props) {    // or const CountButton = () => {}
  
  const [count, setCount] = useState(0)
  // console.log(useState(0))
  // let count = 0

  function handleClick() {
    setCount(count + props.incrementBy)
  }

  const buttonStyle = {
    background: props.buttonColor 
  }

  return (
  <div>
    <button style={buttonStyle} onClick={handleClick}>+{props.incrementBy}</button>
    <div className="count-display">{count}</div>
  </div>
  )
}

export default CountButton