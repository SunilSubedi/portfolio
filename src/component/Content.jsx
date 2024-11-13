import React from 'react'
import Profile1 from '../assets/images/profile1.png';

function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Left Column */}

      <div className="flex flex-col justify-center items-start">
      
        <h2 className="text-4xl font-bold text-blue-500">Software Developer</h2>
       
        <p className="text-gray-700 mt-4">Hi! I’m Sunil Subedi, a passionate and driven Bachelor of Computer Application (BCA) graduate. With a solid foundation in computer science and a keen interest in technology, I’m always eager to learn new concepts and apply my knowledge to solve real-world problems. My journey in technology has allowed me to develop a diverse skill set, which I continue to expand through personal projects and hands-on experience.</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Download CV</button>

      </div>

      {/* Right Column */}
      <div className="flex justify-center items-center">
        <img src={Profile1} alt="Placeholder" className="rounded-lg" />
      </div>
    </div>
    
  )
}

export default Content