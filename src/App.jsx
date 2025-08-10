<<<<<<< HEAD
import Navbar from "./sections/navbar";
=======
import React from "react";
import Navbar from "./sections/Navbar";
>>>>>>> 6bb94ae0dfe589ee78d8c85a8cefdafa0aeaeb4d
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
