import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    Languages: ['Python', 'C++', 'C#', 'Java', 'PowerShell', 'YAML', 'SQL', 'Bash'],
    Web: ['JavaScript', 'React', 'HTML/CSS', 'REST APIs'],
    DevOps: ['Git', 'GitHub Actions', 'Jenkins', 'Azure DevOps', 'Ansible', 'Terraform', 'Docker', 'Kubernetes'],
    Tools: ['Power BI', 'Power Automate', 'AutoCAD', 'Adobe Creative Suite'],
    Certifications: [
      'Microsoft Certified: Azure Fundamentals (AZ-900)',
      'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      'Certified SAFe® 6 Practitioner',
    ],
  };

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">{category}:</h3>
          <ul className="flex flex-wrap">
            {items.map((item, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
