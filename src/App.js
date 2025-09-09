import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import Footer from './pages/Footer';
function App() {
  return (
    <div>
      < NavBar />

      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
<Footer />
    </div>
  );
}
export default App;