import { useState } from 'react'
import Navbar from './component/Navbar'
import Content from './component/Content'
import Project from './component/Project'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="font-nunito h-screen lg:h-screen bg-gradient-to-t from-indigo-200  relative overflow-auto">
           <Navbar></Navbar>
           <div className=' relative mt-20'>
          <Content></Content>
           </div>
           <div className='relative mt-20'>
              <Project></Project>
           </div>
          
        </div>
    </>
  )
}

export default App
