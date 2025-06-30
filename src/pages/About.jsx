import React from 'react';
import {  FaReact, FaCss3Alt, FaBootstrap, FaJs, FaGitAlt, FaMobile }from 'react-icons/fa';
export default function About() {
  const technologies = [
    { name: 'React', icon: FaReact },
    { name: 'Tailwind CSS', icon: FaCss3Alt },
    { name: 'Bootstrap CSS', icon: FaBootstrap },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Git & GitHub', icon: FaGitAlt },
    { name: 'Responsive Design', icon: FaMobile }
  ];

  return (
    <section className="bg-black text-white py-30 px-0 h-[100vh]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/your-profile.jpg"
              alt=""
              className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-lg filter grayscale transition duration-300 hover:scale-105"
            />
            <div className="absolute top-30 right-6 w-50 rounded-full border-2 border-white animate-spin" />
          </div>
        </div>

        <div className="w-full">
          <div className="px-6">
            <h2 className="text-4xl font-bold text-white mb-4 border-b border-white inline-block pb-1">
              About Me
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              I'm <span className="text-white font-semibold">Oussama Belattar</span>, a passionate Front-End Developer based in Morocco.
              I specialize in building responsive, user-focused websites using React, Tailwind CSS, and modern JavaScript tools.
            </p>

            <p className="text-gray-400 text-md mb-6">
              My goal is to transform ideas into beautiful, performant digital experiences. I'm continuously learning and love solving real-world UI problems with clean and scalable code.
            </p>
          </div>

          <div className="bg-black w-full">
            <h3 className="text-xl font-semibold text-white mb-2 px-6">
              Technologies I Use:
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-100 px-6 pb-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <li 
                    key={index}
                    className="bg-white/10 p-3 rounded text-center hover:bg-white/20 transition flex items-center justify-center gap-2"
                  >
                    <IconComponent size={14} className="text-white" />
                    <span>{tech.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}