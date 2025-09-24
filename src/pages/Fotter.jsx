import React from 'react'
import { Link } from 'react-scroll';
const Fotter = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-gray-900 text-center text-amber-100 py-4 gap-4'>
         <footer className="w-full bg-gray-900 flex justify-center gap-8  ">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="text-amber-100 cursor-pointer hover:text-amber-400"
      >
        About
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="text-amber-100 cursor-pointer hover:text-amber-400"
      >
        Skills
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="text-amber-100 cursor-pointer hover:text-amber-400"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="text-amber-100 cursor-pointer hover:text-amber-400"
      >
        Contact
      </Link>
    </footer>
      <h6>Made By Lakshya kakran at 2025 Using React</h6>
    </div>
  )
}

export default Fotter
