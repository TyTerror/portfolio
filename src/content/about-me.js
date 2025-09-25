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
    return: '["coding", "football", "animals", "anime", "comics"]',
  },
  {
    input: 'Tyler.education',
    return:
      '"B.S. Computer Science - Howard University"',
  },
  {
    input: 'Tyler.languages',
    return: '["Python", "C++", "C#", "Java", "PowerShell", "YAML", "SQL", "Bash", "JavaScript", "React", "HTML/CSS", "REST APIs"]',
  },
];

export default statements;
