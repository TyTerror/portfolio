import chevron_logo from 'images/chevron_logo.jpg';
import dell_logo from 'images/dell_logo.jpeg';
import intel_logo from 'images/intel_logo.jpg';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

const projects = [
  {
    title: 'Chevron',
    description:
      '<ul>' +
      '<li>Served as Delfi Manager. Performed IAM (Identity Access Management) duties for 1800+ users across 140+ distinct departments, ensuring secure access provisioning and compliance in a large-scale enterprise environment.</li>' +
      '<li>Automated biannual IRM (Information Risk Assessment) audits, slashing processing time from two months to one week through orchestration of robust and repeatable workflows.</li>' +
      '<li>Optimized resource usage by automating Delfi subscription cleanup policies, preventing budget overruns and generating significant cost savings across the organization.</li>' +
      '<li>Led automation initiative to identify and remove unused subscriptions through automated governance policies, optimizing resource allocation and reducing costs.</li>' +
      '<li>Maintained and enhanced ADO (Azure DevOps) infrastructure, integrating tools like Ansible, Terraform, Docker, and GHAzDO (GitHub Advanced Security for Azure DevOps) to automate security scanning (SAST/DAST) and vulnerability remediation.</li>' +
      '<li>Leveraged Power Automate to build scalable low-code solutions that enabled complex process automation and smoother handoffs to non-technical business units.</li>' +
      '<li>Provided CI/CD pipeline support for both IaaS and PaaS deployments, embedding AI-driven tooling where applicable to improve deployment speed, reliability, and observability.</li>' +
      '<li>Modernized our Quorum Land System and SAP S/4HANA infrastructure, migrating it to the cloud from an on-prem setup. Creating cloud based VMs with automated silent software installation, disaster recovery, and security logging across different production and regulatory compliance environments (S4 and ECC).</li>' +
      '<li>Centralized cloud observability, telemetry, and security posture management across virtualized environments, delivering a new interface that improved scalability, availability, and proactive vulnerability detection.</li>' +
      '<li>Automated ETL (Extract, Transform, and Load) processes to sanitize and transform SQL and ADLS (Azure Data Lake Storage) data; ensuring it was production-ready for use in analytics, reporting, and integration with external ERP applications.</li>' +
      '<li>Administered business-critical Windows and Linux VMs, servers, and applications, ensuring stability and scalable performance.</li>' +
      '<li>Designed and implemented secure, scalable LAN and WAN architectures across distributed environments, improving reliability and reducing downtime.</li>' +
      '<li>Deployed and managed VPN solutions and secure cloud connectivity (DMVPN, IPSec, SSL VPN) for hybrid cloud and on-prem environments.</li>' +
      '</ul>',
    description:
      '<ul>' +
      '<li>Developed, maintained, and enhanced internal tools using Python, C#, and YAML — improving processing speed, eliminating bugs, and adding new features to streamline workflows and boost productivity.</li>' +
      '<li>Cut burn cycle time by 15% through streamlining processes and eliminating workflow bottlenecks with targeted improvements.</li>' +
      '<li>Developed automated software test scripts to ensure validity/correctness of software and enable continuous integration. Used smoke/sanity tests, functional tests, integration tests, and regression tests.</li>' +
      '<li>Implemented infrastructure-as-code with Terraform and ARM templates to enable reproducible, consistent, and reliable deployments.</li>' +
      '<li>Containerized legacy workloads using Docker and orchestrated deployments via Azure Kubernetes Service (AKS) to improve scalability and resilience.</li>' +
      '<li>Implemented monitoring and alerting with Azure Monitor, Application Insights, and Log Analytics to proactively detect and resolve infrastructure issues, reducing MTTR.</li>' +
      '<li>Analyzed test data to determine pain points and recommend improvements to better meet customer needs.</li>' +
      '<li>Oversaw IAM governance for internal testing infrastructure, maintaining secure and compliant user access; led weekly company-wide integration test cycles to ensure end-to-end system quality and readiness.</li>' +
      '<li>Performed verification and validation of production defect fixes in Azure-hosted and on-prem applications, ensuring stability and functionality for large-scale deployments.</li>' +
      '<li>Improved security of company code and reduced known vulnerabilities by over 50% year over rear (YoY) through utilization of CI/CD tools such as Jenkins and Black Duck and updating code libraries to use more secure APIs.</li>' +
      '<li>Managed projects related to various hardware, including HDD (hard disk drive), SSD(solid state drive), and other embedded systems to ensure project stayed of track and met customer expectations.</li>' +
      '<li>Managed hardware-related projects and coordinated cross-functional teams to deliver solutions for enterprise clients, including numerous Fortune 500 companies, ensuring timely delivery and client satisfaction.</li>' +
      '</ul>',
    skills: [
      'Python',
      'C++',
      'C#',
      'Java',
      'PowerShell',
      'YAML',
      'SQL',
      'Bash',
      'JavaScript',
      'React',
      'HTML/CSS',
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
      'AutoCAD',
      'Adobe Creative Suite',
    ],
    image: chevron_logo,
    links: {},
  },
  {
    title: 'Dell',
    description:
      'Developed, maintained, and enhanced internal tools using Python, C#, and YAML — improving processing speed, eliminating bugs, and adding new features to streamline workflows and boost productivity. Cut burn cycle time by 15% through streamlining processes and eliminating workflow bottlenecks with targeted improvements. Developed automated software test scripts to ensure validity/correctness of software and enable continuous integration. Used smoke/sanity tests, functional tests, integration tests, and regression tests. Implemented infrastructure-as-code with Terraform and ARM templates to enable reproducible, consistent, and reliable deployments. Containerized legacy workloads using Docker and orchestrated deployments via Azure Kubernetes Service (AKS) to improve scalability and resilience. Implemented monitoring and alerting with Azure Monitor, Application Insights, and Log Analytics to proactively detect and resolve infrastructure issues, reducing MTTR. Analyzed test data to determine pain points and recommend improvements to better meet customer needs. Oversaw IAM governance for internal testing infrastructure, maintaining secure and compliant user access; led weekly company-wide integration test cycles to ensure end-to-end system quality and readiness. Performed verification and validation of production defect fixes in Azure-hosted and on-prem applications, ensuring stability and functionality for large-scale deployments. Improved security of company code and reduced known vulnerabilities by over 50% year over rear (YoY) through utilization of CI/CD tools such as Jenkins and Black Duck and updating code libraries to use more secure APIs. Managed projects related to various hardware, including HDD (hard disk drive), SSD(solid state drive), and other embedded systems to ensure project stayed of track and met customer expectations. Managed hardware-related projects and coordinated cross-functional teams to deliver solutions for enterprise clients, including numerous Fortune 500 companies, ensuring timely delivery and client satisfaction.',
    skills: [
      'Python',
      'C++',
      'C#',
      'Java',
      'PowerShell',
      'YAML',
      'SQL',
      'Bash',
      'JavaScript',
      'React',
      'HTML/CSS',
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
      'AutoCAD',
      'Adobe Creative Suite',
    ],
    image: dell_logo,
    links: {},
  },
  {
    title: 'Intel',
    description:
      '<ul>' +
      '<li>Automated validation workflows for firmware and hardware compliance, developing scripts and tooling to accelerate testing against customer specifications and internal standards.</li>' +
      '<li>Conducted in-depth defect analysis and system-level testing to identify critical gaps in new and custom product integrations, ensuring high-quality deliverables for enterprise customers.</li>' +
      '<li>Assisted in coordinating non-functional testing activities—including performance, concurrency, and penetration testing—to validate robustness and security of platforms.</li>' +
      '<li>Migrated legacy codebase from IPMI to Redfish APIs, modernizing management interfaces and improving maintainability, compatibility, and security of system interactions.</li>' +
      '<li>Developed reusable test assets and documentation to streamline onboarding and reduce ramp-up time for new validation engineers.</li>' +
      '<li>Collaborated with firmware, security, and platform engineering teams to resolve cross-domain issues and improve test coverage across multiple product lines.</li>' +
      '</ul>',
    skills: [
      'Python',
      'C++',
      'C#',
      'Java',
      'PowerShell',
      'YAML',
      'SQL',
      'Bash',
      'JavaScript',
      'React',
      'HTML/CSS',
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
      'AutoCAD',
      'Adobe Creative Suite',
    ],
    image: intel_logo,
    links: {},
  },
];

export default projects;
