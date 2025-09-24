import React from 'react';
import Header from '../Components/Header';
import mypic from '../images/mygympic.jpg';
import { Link } from 'react-scroll';

const Homepage = () => {
  return (
    <>

      <div className="w-full  h-full flex items-center flex-col pt-20 ">
       
        {/* About Me */}
        <h1 className="text-4xl text-center">
          I'm <span className="text-amber-400">Lakshya Kakran</span>
        </h1>
        <h2 className="text-5xl mt-2 text-center font-bold">Frontend Developer</h2>
       
         {/* My Picture */}
        <div className="w-full max-w-sm sm:max-w-md bg-gray-900 md:max-w-lg lg:max-w-xl h-auto mt-10 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={mypic} 
            alt="Lakshya Kakran" 
            className="w-full h-full object-cover"
          />
        </div>
        <button className='mt-5 hover:bg-amber-400  hover:text-gray-900 transition-all duration-300 text-amber-400 text-3xl border-2 border-gray-700 px-4 py-2 rounded-[2px]'>
           <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-amber-100 cursor-pointer "
                >Contact Me</Link>
        </button>
      </div>
    </>
  );
};

export default Homepage;
