import React from 'react';
import { Link } from 'react-scroll';

const AboutMe = () => {
  return (
    <div id='about' className="w-full   sm:p-4  flex flex-col items-center justify-center bg-gray-900 ">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl pt-5 text-amber-100 font-bold">Who am I?</h1>

      {/* Description */}
      <p className="mt-5 text-amber-100 text-center text-base sm:text-lg max-w-3xl leading-relaxed">
        Final-year BCA student with a strong foundation in frontend development. Skilled in HTML, CSS, JavaScript, and React, with hands-on experience building interactive and responsive web applications.
        <br />
        Programming is my passion, which is why I am actively working alongside my academic career.
        <br />
        Additionally, I enjoy reading story-type books in my leisure time, which I find fun and relaxing!
      </p>

      {/* Button */}
      <button className="mt-6 text-amber-400 text-2xl sm:text-3xl border-2 border-gray-700 px-6 py-2 rounded hover:bg-amber-400 hover:text-gray-900 transition-all duration-300">
        <Link
               to="projects"
               smooth={true}
               duration={500}
               className="text-amber-100 cursor-pointer "
             >Show My Project</Link>
      </button>
    </div>
  );
};

export default AboutMe;
