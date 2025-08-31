import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4 leading-normal text-foreground">
        Results-driven Software Developer with 4+ years of experience designing and deploying scalable automation solutions in enterprise environments. Proven track record of streamlining infrastructure, enhancing CI/CD pipelines, and reducing operational overhead through cloud-native tools and DevOps practices. Adept at leveraging technologies like Azure, Terraform, Docker, and Power Automate to drive efficiency and innovation. Passionate about building secure, maintainable systems that accelerate business outcomes, improve developer productivity and reduce operational cost.
      </p>
      <p className="mb-4 leading-normal text-foreground">
        I'm passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
      </p>
    </section>
  );
};

export default About;
