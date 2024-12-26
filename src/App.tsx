import React from 'react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { About } from './components/about';
import { WorksGrid } from './components/works-grid';
import { Skills } from './components/skills';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <section id="works" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>
          <WorksGrid />
        </div>
      </section>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;