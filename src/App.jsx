import { useState } from 'react'
import Navbar from './component/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="font-nunito h-screen lg:h-screen bg-gradient-to-t from-indigo-200  relative overflow-auto">
           <Navbar></Navbar>
          
        </div>
    </>
  )
}

export default App
