import React from 'react';
import Typewriter from 'components/Typewriter';

const Hero = () => {
  const handleScroll = e => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Tyler Ramsey" />
      <div className="hero-description">
        Results-driven Software Developer with 4+ years of experience designing and deploying scalable automation solutions in enterprise environments.<br />Proven track record of streamlining infrastructure, enhancing CI/CD pipelines, and reducing operational overhead through cloud-native tools and DevOps practices.<br />Adept at leveraging technologies like Azure, Terraform, Docker, and Power Automate to drive efficiency and innovation.<br />Passionate about building secure, maintainable systems that accelerate business outcomes, improve developer productivity and reduce operational cost.
      </div>
    </div>
  );
};

export default Hero;
