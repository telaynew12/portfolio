import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <>
    

    <Header />
    <main className="container mx-auto p-6 bg-white shadow-md rounded-md mt-4">
      <About />

      <Skills />




      <Projects />

      <Contact />
    </main>
    <Footer />
  </>
);

export default App;
