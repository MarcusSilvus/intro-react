import React, { useState, useEffect } from "react"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"

const App = () => {

  const [productState, setProductState] = useState([])

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((product) => {
          return product.title
        })
        setProductState(newProductsState)
      })
  }, [])

  const hasProducts = productState.length > 0 

  return (
    <div>
      <Button>Button</Button>
      <CountButton incrementBy={1} buttonColor={'blue'} />
      {hasProducts ? <SearchBar products={productState} /> : "Loading..."}
      {/* <SearchBar products={["bike rack", "mountain bike", "helmet"]} />  */}
    </div>
  )
}

export default App