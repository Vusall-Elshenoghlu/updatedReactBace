import { useState } from 'react'
import './App.css'
import Events from './components/Events'
import States from './components/States'
import Students from './components/Students'
import Products from './components/Products'
import Text from './components/Text'
import SeconTask from './components/SeconTask'
import ThirdTask from './components/ThirdTask'
import FourthTask from './components/FourthTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Events/> */}
     {/* <States/> */}
     {/* <Students/> */}
     {/* <Products/>
     <Text/>
     <SeconTask/>
     <ThirdTask/> */}
     <FourthTask/>
     
    </>
  )
}

export default App
