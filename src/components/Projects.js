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
  const { image, title, description, skills } = props;

  return (
    <div className="project-card">
      <img className="project-image" src={image} alt="" />
      <div className="project-background" />
      <div className="project-content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: description }} />
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
          description={proj.description}
          skills={proj.skills}
          image={proj.image}
          key={proj.title}
        />
      ))}
    </div>
  );
};

export default Projects;
