import React from 'react';

const projects = [
  {
    title: 'Weather App',
    desc: 'A responsive weather app built with ReactJs using a weather API for fetching live weather.',
    link: 'https://github.com/Lakshyakakran/WeatherApp.git',
  },
  {
    title: 'Employee Management System',
    desc: 'Employee management system with CRUD functionality using ReactJs. Data is stored in local storage.',
    link: 'https://github.com/Lakshyakakran/Employee-Management-System.git',
  },
];

const Project = () => {
  return (
    <div id="projects" className="w-full flex flex-col items-center bg-gray-900 px-4 sm:px-8 py-12">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl text-amber-100 font-bold mb-12">My Projects</h1>

      {/* Projects Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl sm:text-3xl text-amber-100 font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-600 text-gray-900 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
