import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Documentation from './components/Documentation';
import About from './components/About';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Outcomes from './components/Outcomes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Documentation />
        <About />
        <Team />
        <Sponsors />
        <Outcomes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
