import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="m-4 bg-white">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center">© 2024 All Rights Reserved.</span>
      <div className="mt-3 md:mt-0 text-sm text-gray-600 flex flex-col md:flex-row md:items-center md:gap-6">
  <div className="mt-1 md:mt-0">Resume: <a href="/sunil-resume-it.pdf" className="text-indigo-700">Download</a> </div>
        <div className="mt-2 md:mt-0 flex items-center gap-4">
          <a href="https://github.com/SunilSubedi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-700 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222v3.293c0 .319.218.694.825.576 4.765-1.589 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/sunil-subedi-746a1092/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-700 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.291c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.291h-3v-4.5c0-1.072-.928-1.5-1.5-1.5s-1.5.428-1.5 1.5v4.5h-3v-9h3v1.222c.609-.904 1.583-1.222 2.5-1.222 1.905 0 3.5 1.595 3.5 3.5v5.5z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer