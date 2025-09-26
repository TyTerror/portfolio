const statements = [
  {
    input: 'Tyler.location',
    return: '"Houston, TX"',
  },
  {
    input: 'Tyler.contact',
    return:
      '["<a href="mailto:tyler.elias.ramsey@gmail.com">tyler.elias.ramsey@gmail.com</a>", "<a rel="noopener" href="https://www.linkedin.com/in/tylerramseyhu/">LinkedIn</a>", "<a rel="noopener" href="https://github.com/TyTerror">github</a>"]',
  },
  {
    input: 'Tyler.resume',
    return:
      '"<a rel="noopener" href="/tyler_ramsey_resume.docx" target="_blank">tyler_ramsey_resume.docx</a>"',
  },
  {
    input: 'Tyler.interests',
    return: '["coding", "football", "cooking", "anime","animals"]',
  },
  {
    input: 'Tyler.education',
    return: '"B.S. Computer Science - Howard University", "3.45 GPA"',
  },
  {
    input: 'Tyler.languages',
    return:
      '["Python", "C++", "C#", "Java", "PowerShell", "YAML", "SQL", "Bash"]',
  },
  {
    input: 'Tyler.web',
    return: '["JavaScript", "React", "HTML/CSS", "REST APIs"]',
  },
  {
    input: 'Tyler.devops',
    return:
      '["Git", "GitHub Actions", "Jenkins", "Azure DevOps", "Ansible", "Terraform", "Docker", "Kubernetes"]',
  },
  {
    input: 'Tyler.tools',
    return: '["Power BI", "Power Automate", "AutoCAD", "Adobe Creative Suite"]',
  },
  {
    input: 'Tyler.certifications',
    return:
      '["Microsoft Certified: Azure Fundamentals (AZ-900)", "Microsoft Certified: Azure Administrator Associate (AZ-104)", "Microsoft Certified: Azure AI Fundamentals (AI-900)", "Certified SAFe® 6 Practitioner"]',
  },
];

export default statements;
