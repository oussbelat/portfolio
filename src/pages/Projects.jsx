import React from "react";
import Data from '../json/data.json';
import Images from '../constant/images';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#000000] p-8 mt-17">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Data.map((project, index) => {
          return (
            <div 
              key={index} 
              className="bg-[#ffffff] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <img 
                src={Images[project.image]} 
                alt={project.title || "Project image"} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-black mb-2">{project.title || "No title"}</h2>
                <p className="text-sm text-black mb-6 flex-grow">{project.description || "No description."}</p>
                <div className="flex gap-4">
                  <a
                    href={project.link.replace("#", "")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition-colors text-center"
                  >
                    View Project
                  </a>
                 
                  <a
                    href={project.codeLink ? project.codeLink.replace("#", "") : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-600 transition-colors text-center"
                  >
                    See Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

