import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectSkill = props => {
  return <span className="project-skill">{props.skill}</span>;
};

const ProjectSkills = props => {
  return (
    <div className="project-skills">
      {props.skills.map((skill, index) => {
        return <ProjectSkill skill={skill} key={index} />;
      })}
    </div>
  );
};

const ProjectCard = props => {
  const { image, title, role, location, timeline, description, skills, links } = props;

  const formattedDescription = description
    .split('\n')
    .map((line, index) => (
      <p key={index} className="description-line">
        {line.trim() !== '' ? `· ${line.trim()}` : ''}
      </p>
    ));

  return (
    <div className="project-card">
      <img className="project-image" src={image} alt="" />
      <div className="project-background" />
      <div className="project-content">
        <h3>
          <a href={links.website} target="_blank" rel="noopener noreferrer">
            {title}
          </a>{' '}
          - {role}
        </h3>
        <p className="project-location-timeline">
          {location} | {timeline}
        </p>
        <div className="project-description">{formattedDescription}</div>
        <ProjectSkills skills={skills} />
      </div>
    </div>
  );
};

const Projects = props => {
  const { projects } = props;
  return (
    <div className="projects-container">
      {projects.map(proj => (
        <ProjectCard
          title={proj.title}
          role={proj.role}
          location={proj.location}
          timeline={proj.timeline}
          description={proj.description}
          skills={proj.skills}
          image={proj.image}
          links={proj.links}
          key={proj.title + proj.role}
        />
      ))}
    </div>
  );
};

export default Projects;
