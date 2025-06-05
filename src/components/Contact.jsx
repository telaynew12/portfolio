// --- src/components/Contact.jsx ---
import React from 'react';

const Contact = () => (
  <section className="bg-gray-50 py-12">
    <div className="container mx-auto max-w-3xl text-center px-4">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact</h2>
      <p className="text-lg text-gray-700 mb-2">
        Email:{' '}
        <a href="mailto:telaynew11@gmail.com" className="text-blue-600 hover:underline">
          telaynew11@gail.com
        </a>
      </p>
      <p className="text-lg text-gray-700">
        GitHub:{' '}
        <a
          href="https://github.com/telaynew12"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @telaynew12
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
