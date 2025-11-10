import { useState } from 'react'
import Content from './component/Content'
import Project from './component/Project'
import Footer from './component/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className="font-nunito min-h-screen bg-gray-100 relative overflow-auto">
          <div className='pt-12'>
            <Content />
          </div>
          <div className='mt-12'>
            <Footer />
          </div>
        </div>
    </>
  )
}

export default App
