import chevron_logo from 'images/chevron_logo.jpg';
import dell_logo from 'images/dell_logo.jpeg';
import intel_logo from 'images/intel_logo1.jpg';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: 'Chevron',
    role: 'Software Engineer II',
    location: 'Houston, TX',
    timeline: 'May 2023 – July 2025',
    description:
      'Served as Delfi Manager. Performed IAM (Identity Access Management) duties for 1800+ users across 140+ distinct departments, ensuring secure access provisioning and compliance in a large-scale enterprise environment.\n' +
      'Automated biannual IRM (Information Risk Assessment) audits, slashing processing time from two months to one week through orchestration of robust and repeatable workflows.\n' +
      'Optimized resource usage by automating Delfi subscription cleanup policies, preventing budget overruns and generating significant cost savings across the organization. Led automation initiative to identify and remove unused subscriptions through automated governance policies, optimizing resource allocation and reducing costs.\n' +
      'Maintained and enhanced ADO (Azure DevOps) infrastructure, integrating tools like Ansible, Terraform, Docker, and GHAzDO (GitHub Advanced Security for Azure DevOps) to automate security scanning (SAST/DAST) and vulnerability remediation.\n' +
      'Leveraged Power Automate to build scalable low-code solutions that enabled complex process automation and smoother handoffs to non-technical business units.\n' +
      'Provided CI/CD pipeline support for both IaaS and PaaS deployments, embedding AI-driven tooling where applicable to improve deployment speed, reliability, and observability.\n' +
      'Modernized our Quorum Land System and SAP S/4HANA infrastructure, migrating it to the cloud from an on-prem setup. Creating cloud based VMs with automated silent software installation, disaster recovery, and security logging across different production and regulatory compliance environments (S4 and ECC).\n' +
      'Centralized cloud observability, telemetry, and security posture management across virtualized environments, delivering a new interface that improved scalability, availability, and proactive vulnerability detection.\n' +
      'Automated ETL (Extract, Transform, and Load) processes to sanitize and transform SQL and ADLS (Azure Data Lake Storage) data; ensuring it was production-ready for use in analytics, reporting, and integration with external ERP applications.\n' +
      'Administered business-critical Windows and Linux VMs, servers, and applications, ensuring stability and scalable performance.\n' +
      'Designed and implemented secure, scalable LAN and WAN architectures across distributed environments, improving reliability and reducing downtime.\n' +
      'Deployed and managed VPN solutions and secure cloud connectivity (DMVPN, IPSec, SSL VPN) for hybrid cloud and on-prem environments.\n' +
      'Developed, maintained, and enhanced internal tools using Python, C#, and YAML — improving processing speed, eliminating bugs, and adding new features to streamline workflows and boost productivity.\n' +
      'Cut burn cycle time by 15% through streamlining processes and eliminating workflow bottlenecks with targeted improvements.\n' +
      'Developed automated software test scripts to ensure validity/correctness of software and enable continuous integration. Used smoke/sanity tests, functional tests, integration tests, and regression tests.\n' +
      'Implemented infrastructure-as-code with Terraform and ARM templates to enable reproducible, consistent, and reliable deployments.\n' +
      'Containerized legacy workloads using Docker and orchestrated deployments via Azure Kubernetes Service (AKS) to improve scalability and resilience.\n' +
      'Implemented monitoring and alerting with Azure Monitor, Application Insights, and Log Analytics to proactively detect and resolve infrastructure issues, reducing MTTR.\n' +
      'Analyzed test data to determine pain points and recommend improvements to better meet customer needs.\n' +
      'Oversaw IAM governance for internal testing infrastructure, maintaining secure and compliant user access; led weekly company-wide integration test cycles to ensure end-to-end system quality and readiness.\n' +
      'Performed verification and validation of production defect fixes in Azure-hosted and on-prem applications, ensuring stability and functionality for large-scale deployments.\n' +
      'Improved security of company code and reduced known vulnerabilities by over 50% year over rear (YoY) through utilization of CI/CD tools such as Jenkins and Black Duck and updating code libraries to use more secure APIs.\n' +
      'Managed projects related to various hardware, including HDD (hard disk drive), SSD(solid state drive), and other embedded systems to ensure project stayed of track and met customer expectations.\n' +
      'Managed hardware-related projects and coordinated cross-functional teams to deliver solutions for enterprise clients, including numerous Fortune 500 companies, ensuring timely delivery and client satisfaction.',
    skills: [
      'Python',
      'C++',
      'C#',
      'PowerShell',
      'YAML',
      'SQL',
      'Bash',
      'REST APIs',
      'Git',
      'GitHub Actions',
      'Jenkins',
      'Azure DevOps',
      'Ansible',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Power BI',
      'Power Automate',
    ],
    image: chevron_logo,
    links: {
      website: 'https://www.chevron.com/',
    },
  },
  {
    title: 'Dell Technologies',
    role: 'Software Engineer',
    location: 'Austin, TX',
    timeline: 'June 2021 – Feb 2023',
    description:
      'Developed, maintained, and enhanced internal tools using Python, C#, and YAML — improving processing speed, eliminating bugs, and adding new features to streamline workflows and boost productivity.\n' +
      'Cut burn cycle time by 15% through streamlining processes and eliminating workflow bottlenecks with targeted improvements.\n' +
      'Developed automated software test scripts to ensure validity/correctness of software and enable continuous integration. Used smoke/sanity tests, functional tests, integration tests, and regression tests.\n' +
      'Implemented infrastructure-as-code with Terraform and ARM templates to enable reproducible, consistent, and reliable deployments.\n' +
      'Containerized legacy workloads using Docker and orchestrated deployments via Azure Kubernetes Service (AKS) to improve scalability and resilience.\n' +
      'Implemented monitoring and alerting with Azure Monitor, Application Insights, and Log Analytics to proactively detect and resolve infrastructure issues, reducing MTTR.\n' +
      'Analyzed test data to determine pain points and recommend improvements to better meet customer needs.\n' +
      'Oversaw IAM governance for internal testing infrastructure, maintaining secure and compliant user access; led weekly company-wide integration test cycles to ensure end-to-end system quality and readiness.\n' +
      'Performed verification and validation of production defect fixes in Azure-hosted and on-prem applications, ensuring stability and functionality for large-scale deployments.\n' +
      'Improved security of company code and reduced known vulnerabilities by over 50% year over rear (YoY) through utilization of CI/CD tools such as Jenkins and Black Duck and updating code libraries to use more secure APIs.\n' +
      'Managed projects related to various hardware, including HDD (hard disk drive), SSD(solid state drive), and other embedded systems to ensure project stayed of track and met customer expectations.\n' +
      'Managed hardware-related projects and coordinated cross-functional teams to deliver solutions for enterprise clients, including numerous Fortune 500 companies, ensuring timely delivery and client satisfaction.',
    skills: [
      'Python',
      'C++',
      'C#',
      'PowerShell',
      'YAML',
      'Bash',
      'HTML/CSS',
      'REST APIs',
      'Jenkins',
      'Azure DevOps',
      'Ansible',
      'Terraform',
      'IAM',
    ],
    image: dell_logo,
    links: {
      website: 'https://www.dell.com/',
    },
  },
  {
    title: 'Dell Technologies',
    role: 'Software Engineer Intern',
    location: 'Apex, NC',
    timeline: 'June 2020 – July 2020',
    description:
      'Created a web-based monitoring tool enabling facility staff to view, manage, and analyze over 200 internet-connected devices, consolidating key operational metrics into a centralized dashboard.\n' +
      'Delivered actionable insights through reporting and visualization features that improved visibility into device health and product lifecycle progress.\n' +
      'Reduced manual troubleshooting time by several hours per week by automating device discovery, management, and alerting workflows, significantly improving operational efficiency.\n' +
      'Served as Product Owner during Agile sprints, driving the end-to-end development lifecycle including requirements gathering, backlog prioritization, sprint planning, and release management.\n' +
      'Designed and implemented extensible features to support scaling to additional device types and capture richer metadata, laying the foundation for the production system in use today.\n' +
      'Performed comprehensive QA, including usability testing, regression testing, and black-box validation to ensure reliability and user acceptance.\n' +
      'Collaborated cross-functionally with systems engineering and IT teams to integrate the tool into existing infrastructure and align with security policies.',
    skills: [
      '.NET Core',
      'Bootstrap',
      'HTML',
      'JSON',
      'SQL',
      'React',
      'Java',
      'Javascript',
      'CSS',
      'C#',
    ],
    image: dell_logo,
    links: {
      website: 'https://www.dell.com/',
    },
  },
  {
    title: 'Intel',
    role: 'Software Engineer Intern',
    location: 'Folsom, CA',
    timeline: 'May 2019 – August 2019',
    description:
      'Automated validation workflows for firmware and hardware compliance, developing scripts and tooling to accelerate testing against customer specifications and internal standards.\n' +
      'Conducted in-depth defect analysis and system-level testing to identify critical gaps in new and custom product integrations, ensuring high-quality deliverables for enterprise customers.\n' +
      'Assisted in coordinating non-functional testing activities—including performance, concurrency, and penetration testing—to validate robustness and security of platforms.\n' +
      'Migrated legacy codebase from IPMI to Redfish APIs, modernizing management interfaces and improving maintainability, compatibility, and security of system interactions.\n' +
      'Developed reusable test assets and documentation to streamline onboarding and reduce ramp-up time for new validation engineers.\n' +
      'Collaborated with firmware, security, and platform engineering teams to resolve cross-domain issues and improve test coverage across multiple product lines.',
    skills: [
      'Powershell',
      'Bash',
      'Redfish API',
      'Python',
      'Rest API',
      'JSON',
      'HTML',
    ],
    image: intel_logo,
    links: {
      website: 'https://www.intel.com/',
    },
  },
];

export default projects;
