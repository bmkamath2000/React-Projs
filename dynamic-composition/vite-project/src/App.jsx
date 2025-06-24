import DynamicComponent from './components/DynamicComponent'
import './App.css'

function App() {
  const componentsData = [ 
    {'title':'Component1', 'content':'content of Component1'},
    {'title':'Component2', 'content':'content of Component2'}]

  return (
    <>
      {componentsData.map((obj,index) => (
        <DynamicComponent key={index} itemId={index} {...obj}></DynamicComponent>
      ))}
    </>
  )
}

export default App
