import google from '../assets/google.png'
import x from '../assets/x.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.jpg'
import fb from '../assets/fb.png'

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4 text-center">
      <p className="text-gray-700 dark:text-gray-300">
        © 2026 Prodesk IT. All rights reserved.
      </p>
      <div className="flex justify-center items-center gap-6 py-4">
      
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={google} alt="Google" className="h-6 w-6 hover:scale-110 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:opacity-80" loading='lazy'/>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={x} alt="Twitter" className="h-6 w-6 hover:scale-110 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:opacity-80" loading='lazy'/>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub" className="h-6 w-6 hover:scale-110 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:opacity-80" loading='lazy'/>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="h-6 w-6 hover:scale-110 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:opacity-80" loading='lazy'/>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="Instagram" className="h-6 w-6 hover:scale-110 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:opacity-80" loading='lazy'/>
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src={fb} alt="Facebook" className="h-6 w-6 hover:scale-110 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:opacity-80" loading='lazy'/>
      </a>

    </div>

    </footer>
  )
}

export default Footer