import React from 'react';

import Layout from 'layouts/index';
import Hero from 'components/Hero';
import About from 'components/About';
import Projects from 'components/Projects';
import ContactLinks from 'components/ContactLinks';

import projects from 'content/projects';
import statements from 'content/about-me';

const Home = () => {
  return (
    <Layout>
      <React.Fragment>
        <Hero />
        <About statements={statements} />
        <h2 id="experience" className="section-title">
          Experience
        </h2>
        <Projects projects={projects} />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
      </React.Fragment>
    </Layout>
  );
};

export default Home;

export const Head = () => (
  <>
    <title>Tyler's Portfolio</title>
    <meta name="description" content="Tyler Ramsey's Portfolio" />
    <meta name="keywords" content="tyler ramsey, portfolio, software developer" />
  </>
);
