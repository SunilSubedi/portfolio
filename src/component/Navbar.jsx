import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faX } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function Navbar() {
    const [isMenu, setIsMenu] = useState(true);

  const handleMenu = () => {
        setIsMenu(isMenu => !isMenu)

  }
  return (
    
    
        
    <nav className="w-full fixed top-0 bg-white  z-10">
        <div className="container mx-auto py-5 flex items-center justify-between">
            {/* Logo of website */}
            <div className="flex items-center gap-1">
           
            <span className="text-2xl font-bold text-indigo-900">Sunil Subedi</span>
            </div>
            {/* Link tag */}
            <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
                    <li className="hover:text-gray-500"><Link to="/">Home</Link></li>
                    <li className="hover:text-gray-500"><Link to="/">About Me</Link></li>
                    <li className="hover:text-gray-500"><Link to="/">Projects</Link></li>
                    <li className="hover:text-gray-500"><Link to="/">Contact</Link></li>

            </ul>
            
            <div className="hidden md:block">
            <FontAwesomeIcon icon={faMoon} size="2x"/>
            </div>
            {isMenu? (<div className=" md:hidden">
                <FontAwesomeIcon icon={faBars} size='2x' className="cursor-pointer" onClick={handleMenu}/>
            </div>) : (
              
              <div className="md:hidden flex">
                
              <ul className=" bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl text-white space-y-10 text-center">
               
                    <li><Link to="/portfolio">Home</Link></li>
                    <li><Link to="/portfolio">About Me</Link></li>
                    <li><Link to="/portfolio">Projects</Link></li>
                    <li><Link to="/portfolio">Contact</Link></li>
            </ul>
            <FontAwesomeIcon icon={faX} size='2x' className="p-0 text-in cursor-pointer  z-20" onClick={handleMenu}/>
            </div>
         )}
            
           
            </div>
    </nav>
  )
}

export default Navbar