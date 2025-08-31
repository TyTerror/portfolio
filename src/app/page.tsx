import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between gap-4 p-8 lg:p-24 min-h-screen">
      {/* Left Sidebar */}
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:max-w-md lg:flex lg:flex-col lg:justify-between py-8">
        <Header />
      </aside>

      {/* Right Main Content */}
      <main className="lg:w-1/2 py-8">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
          <About />
        </section>
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
          <Experience />
        </section>
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
          <Projects />
        </section>
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
          <Skills />
        </section>
      </main>
    </div>
  );
}
