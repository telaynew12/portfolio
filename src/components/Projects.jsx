// --- src/components/Projects.jsx ---
import React from 'react';

const Projects = () => (
  <section className="container mx-auto max-w-3xl py-12 px-4 text-center">
    <h2 className="text-4xl font-bold mb-10 text-gray-800">Projects</h2>
    <div className="space-y-10">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
        <p className="text-gray-600 mb-4">
          Fully responsive personal website built using React and Tailwind CSS.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Project
        </a>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold mb-2">Task Manager App</h3>
        <p className="text-gray-600 mb-4">
          MERN stack app to manage daily tasks and collaborate with teams.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Project
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
