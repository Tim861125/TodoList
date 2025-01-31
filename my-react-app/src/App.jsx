import { useState } from "react"
function ChildrenComponent( { clicks } ){
  return <div>{ clicks * 3 }</div>
}
function MyComponent() {
  const [ clicks, setClicks ] = useState( 0 );
  const handleClick = () => {
    setClicks( clicks + 1 )
    console.log( clicks );
  }

  return (
    <>
      <button onClick = { handleClick }>點擊次數:{ clicks }</button>
      <ChildrenComponent clicks={clicks}/>
    </>
  )
}
function App() {
  return(
    <>
      <MyComponent/>
      <MyComponent/>
      <MyComponent/>
    </>
  )
}

export default App