import React from 'react'

function Project() {
  return (
    <div className="grid gap-3 md:gap-3 grid-cols-1 md:grid-cols-4 p-8">
    <div className=" max-w-xs rounded-lg overflow-hidden shadow-lg bg-white relative">
      {/* Project Image */}
      <img
        src="https://via.placeholder.com/300"
        alt="Project Thumbnail"
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />

      {/* Project Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-indigo-900">Project Title</h3>
        <p className="text-sm text-gray-600 mt-2">A brief description of the project goes here. You can explain the purpose of the project or any technologies used.</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <span className="text-white text-lg font-bold">View Project</span>
      </div>
    </div>
    <div className=" max-w-xs rounded-lg overflow-hidden shadow-lg bg-white relative">
      {/* Project Image */}
      <img
        src="https://via.placeholder.com/300"
        alt="Project Thumbnail"
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />

      {/* Project Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-indigo-900">Project Title</h3>
        <p className="text-sm text-gray-600 mt-2">A brief description of the project goes here. You can explain the purpose of the project or any technologies used.</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <span className="text-white text-lg font-bold">View Project</span>
      </div>
    </div>
    </div>
  )
}

export default Project