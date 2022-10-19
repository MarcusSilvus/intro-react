import React, {useState} from "react"
import "./SearchBar.css"

// const products = [
//   'tooth paste',
//   'tooth brush',
//   'mouth wash',
//   'dental floss',
//   'mouth guard'
// ]

const SearchBar = (props) => {

  const [searchValue, setValue] = useState("")

  const handleInputChange = (event) => {
    setValue(event.target.value)
  }

  const handleClearClick = () => {
    setValue("")
  }

  const filteredProducts = props.products.filter((product) => {
      return product.includes(searchValue)
    })
  

  const hasContent = searchValue.length > 0

  console.log(hasContent)

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange}/>
      {hasContent && <button onClick={handleClearClick}>clear</button>}

      <ul>
        {filteredProducts.map((product) => {
          return <li key={product}>{product}</li>
        })}
      </ul>
    </div>
  )
}

export default SearchBar