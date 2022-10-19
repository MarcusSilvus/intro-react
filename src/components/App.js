import React from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const products = [
  'tooth paste',
  'tooth brush',
  'mouth wash',
  'dental floss',
  'mouth guard'
]

const App = () => {
  return (
    <div>

      <CountButton incrementBy={5} buttonColor={'blue'} />
      <SearchBar products={products} />
      {/* <SearchBar products={["bike rack", "mountain bike", "helmet"]} />  */}
    </div>
  )
}

export default App