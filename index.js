const reactContentRoot = document.getElementById('root')

// createElement takes 3 arguments: name of elememt, prop, and content that goes in the element
// const myFirstElement = React.createElement("ul", null, [
//   React.createElement("li", null, "item1"),
//   React.createElement("li", null, "item2")
// ])



// const myJSXElement = (
//   <ul>
//     <li>item1</li>
//     <li>item2</li>
//     <li>{ myItem }</li>
//   </ul>
// )

const App = () => {     // same thing as function App() {}
  const myItem = 'item3'

  return (
    <ul>
    <li>item1</li>
    <li>item2</li>
    <li>{ myItem }</li>
  </ul>
  )
}

ReactDOM.render(<App />, reactContentRoot)