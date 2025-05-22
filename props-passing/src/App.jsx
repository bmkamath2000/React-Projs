import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
function App() {
  let obj1 = { fname: "Darshan", lname: "Devaraj" }
  return (
    <>
      <Component1 obj={obj1} />
      <Component2 >
       <h1>Kaise ho aap sab</h1>
       <h2>Best Web Dev Course</h2>
       <h3>Best teacher in the world</h3>
       </Component2>
    </>
  )
}

export default App
