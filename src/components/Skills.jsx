import React from 'react';

const Skills = () => (
  <section className="py-16 bg-purple-50">
    <div className="container mx-auto max-w-3xl text-center px-6">
      <h2 className="text-5xl font-extrabold mb-12 text-pink-700 drop-shadow-md">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg font-semibold text-purple-900">
        <li className="bg-white rounded-xl shadow-lg py-5 hover:shadow-2xl transition-shadow cursor-default">
          JavaScript / TypeScript
        </li>
        <li className="bg-white rounded-xl shadow-lg py-5 hover:shadow-2xl transition-shadow cursor-default">
          React / Next.js
        </li>
        <li className="bg-white rounded-xl shadow-lg py-5 hover:shadow-2xl transition-shadow cursor-default">
          Node.js / Express
        </li>
        <li className="bg-white rounded-xl shadow-lg py-5 hover:shadow-2xl transition-shadow cursor-default">
          MongoDB / PostgreSQL
        </li>
        <li className="bg-white rounded-xl shadow-lg py-5 hover:shadow-2xl transition-shadow cursor-default">
          Tailwind CSS / Bootstrap
        </li>
      </ul>
    </div>
  </section>
);

export default Skills;
