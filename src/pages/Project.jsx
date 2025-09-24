import React from 'react';
import Wapp from '../images/wapp.png';
import Ems from '../images/ems.png';

const projects = [
  {
    title: 'Weather App',
    desc: 'A responsive weather app built with ReactJs and we use weather Api for fetching the weather.',
  },
  {
    title: 'Employee Management System',
    desc: 'Employee management system with CRUD functionality using React Js And For database we use local storage .',
  },
];

const Project = () => {
  return (
    <div id="projects" className="w-full flex flex-col items-center bg-gray-900 px-4 sm:px-8 py-8">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl pt-4 text-amber-100 font-bold">My Projects</h1>

      {/* Projects Section */}
      <div className="w-full mt-12 max-w-6xl flex flex-col lg:flex-row gap-8 h-auto lg:h-[50rem]">
        {/* Left Column */}
        <div className="flex flex-col gap-8 flex-1 lg:justify-start">
          <div className="bg-gray-800 rounded-lg p-4 h-[50%] lg:h-[50%] flex flex-col items-center justify-start hover:scale-105 transition-transform duration-300">
            <div className="w-full h-64 bg-gray-600 rounded-md mb-4">
              <img className='w-full h-full' src={Wapp} alt="" />
            </div>
            <h2 className="text-amber-100 text-xl font-semibold mb-2">{projects[0].title}</h2>
            <p className="text-gray-300 text-center text-sm">{projects[0].desc}</p>
             <a  className='text-2xl underline text-amber-200' href="https://github.com/Lakshyakakran/WeatherApp.git">Project Link</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 flex-1 lg:justify-end">
          <div className="bg-gray-800 rounded-lg p-4 h-[50%] lg:h-[50%] flex flex-col items-center justify-end hover:scale-105 transition-transform duration-300">
            <div className="w-full h-64 bg-gray-600 rounded-md mb-4">
              <img className='w-full h-full' src={Ems} alt="" />

            </div>
            <h2 className="text-amber-100 text-xl font-semibold mb-2">{projects[1].title}</h2>
            <p className="text-gray-300 text-center text-sm">{projects[1].desc}</p>
             <a  className='text-2xl underline text-amber-200' href="https://github.com/Lakshyakakran/Employee-Management-System.git">Project Link</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
