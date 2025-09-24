import React from 'react';
import html from '../images/htmlimage.png';
import css from '../images/css3.png';
import reactImg from '../images/reactimg.png';
import tailwind from '../images/tailwindimg.png';
import javascript from '../images/javascript.png';
import github from '../images/githubimg.webp';

const Skills = () => {
  return (
    <div id='skills' className="w-full flex flex-col items-center bg-gray-900">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl  pt-4   text-amber-100 font-bold">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="px-4 sm:px-8 py-8 w-full max-w-6xl">
        <div className="border-2 border-gray-400 rounded p-4 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 w-full">
            {/* HTML */}
            <div className="bg-transparent border-2 border-gray-700 rounded flex items-center justify-center p-2 sm:p-4">
              <img src={html} alt="HTML" className="h-20 sm:h-28 md:h-32" />
            </div>
            {/* CSS */}
            <div className="bg-transparent border-2 border-gray-700 rounded flex items-center justify-center p-2 sm:p-4">
              <img src={css} alt="CSS" className="h-20 sm:h-28 md:h-32" />
            </div>
            {/* JavaScript */}
            <div className="bg-transparent border-2 border-gray-700 rounded flex items-center justify-center p-2 sm:p-4">
              <img src={javascript} alt="JavaScript" className="h-20 sm:h-28 md:h-32" />
            </div>
            {/* Tailwind */}
            <div className="bg-transparent border-2 border-gray-700 rounded flex items-center justify-center p-2 sm:p-4">
              <img src={tailwind} alt="Tailwind" className="h-20 sm:h-28 md:h-32" />
            </div>
            {/* React */}
            <div className="bg-transparent border-2 border-gray-700 rounded flex items-center justify-center p-2 sm:p-4">
              <img src={reactImg} alt="React" className="h-20 sm:h-32 md:h-40" />
            </div>
            {/* GitHub */}
            <div className="bg-transparent border-2 border-gray-700 rounded flex items-center justify-center p-2 sm:p-4">
              <img src={github} alt="GitHub" className="h-20 sm:h-32 md:h-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
