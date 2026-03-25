import { useState } from 'react'
import logo from '../assets/logo.jpg'
import menuIcon from '../assets/menus.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <nav className="sticky top-0 z-50 bg-amber-400/20 backdrop-blur-lg border-b border-amber-200/30 shadow-sm">
      <div className="container mx-auto px-4">
        

        <div className="flex justify-between items-center py-3">

          
          <img src={logo} alt="logo" className="h-10" loading='lazy'/>

          
          <div className="flex items-center gap-3">

        
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 bg-black text-white rounded text-sm"
            >
              Dark Mode
            </button>

            {/* Hamburger Menu Button (Shown on Mobile) */}
            <button onClick={toggleMenu} className="md:hidden">
              <img src={menuIcon} alt="menu" className="h-6" />
            </button>

            {/* Navigation Links (Hidden on Mobile) */}
            <ul className="hidden md:flex gap-6 text-black font-medium">
              <a href="/"><li className="cursor-pointer hover:text-white">Home</li></a>
              <a href="/services"><li className="cursor-pointer hover:text-white">Services</li></a>
              <a href="/about"><li className="cursor-pointer hover:text-white">About</li></a>
              <a href="/contact"><li className="cursor-pointer hover:text-white">Contact</li></a>
            </ul>

          </div>
        </div>

        {/* Mobile Menu (Shown when Hamburger is clicked) */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-3 text-black font-medium">
              <a href="/"><li className="cursor-pointer hover:text-white">Home</li></a>
              <a href="/services"><li className="cursor-pointer hover:text-white">Services</li></a>
              <a href="/about"><li className="cursor-pointer hover:text-white">About</li></a>
              <a href="/contact"><li className="cursor-pointer hover:text-white">Contact</li></a>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar