import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:tyler.elias.ramsey@gmail.com"
        >
          tyler.elias.ramsey@gmail.com
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/tylerramseyhu/"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/TyTerror"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </span>
    </div>
  );
};

export default ContactLinks;
