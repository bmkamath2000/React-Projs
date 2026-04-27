import { useState } from 'react'
import Child from './Child.jsx'

function App() {
  const [count, setCount] = useState(0)
  function liftStateUp(props){
    alert(props.greet)
  }
  return (
    <>
      <Child func={liftStateUp}/>
    </>
  )
}

export default App
