import './App.css'
import Component1 from './components/Component1'
import Success from './components/Success'
function App() {
  let obj1 = { fname: "Darshan", lname: "Devaraj" }
  return (
    <>
      <Component1 obj={obj1} />
      <Success >
        <h1>Kaise ho aap sab</h1>
        <h2>Best Web Dev Course</h2>
        <h3>Best teacher in the world</h3>

       </Success> 
    </>
  )
}

export default App
/*
       */