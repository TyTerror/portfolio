import React, { useState } from 'react';

const About = props => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleRedClick = () => {
    setIsVisible(false);
  };

  const handleYellowClick = () => {
    setIsMinimized(!isMinimized);
  };

  const handleGreenClick = () => {
    setIsMinimized(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="about-container">
      <div className={`terminal ${isMinimized ? 'minimized' : ''}`}>
        <div className="terminal-header">
          <div className="header-button red" onClick={handleRedClick} />
          <div className="header-button yellow" onClick={handleYellowClick} />
          <div className="header-button green" onClick={handleGreenClick} />
        </div>
        {!isMinimized && (
          <div className="terminal-window">
            <Statements statements={props.statements} />
          </div>
        )}
      </div>
    </div>
  );
};

const Statements = props => {
  return (
    <div>
      {props.statements.map((statement, index) => {
        return <Statement statement={statement} key={index} />;
      })}
      <div className="statement">
        <div className="input-statement">
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

const Statement = props => {
  return (
    <div className="statement">
      <div className="input-statement">{props.statement.input}</div>
      <div
        className="return-statement"
        dangerouslySetInnerHTML={{ __html: props.statement.return }}
      />
    </div>
  );
};

export default About;
