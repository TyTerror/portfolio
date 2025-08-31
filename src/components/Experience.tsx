import React from 'react';

const Experience: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <ol className="group/list">
        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              May 2023 – Present
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group-hover/link:text-accent text-base"
                    href="https://www.chevron.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Software Engineer II at Chevron"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block lg:-inset-x-6 lg:-inset-y-4"></span>
                    <span>
                      Software Engineer II ·{' '}
                      <span className="inline-block">
                        Chevron
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Served as Delfi Manager. Performed IAM (Identity Access Management) duties for 1800+ users across 140+ distinct departments, ensuring secure access provisioning and compliance in a large-scale enterprise environment. Automated biannual IRM (Information Risk Assessment) audits, slashing processing time from two months to one week through orchestration of robust and repeatable workflows. Optimized resource usage by automating Delfi subscription cleanup policies, preventing budget overruns and generating significant cost savings across the organization. Led automation initiative to identify and remove unused subscriptions through automated governance policies, optimizing resource allocation and reducing costs. Maintained and enhanced ADO (Azure DevOps) infrastructure, integrating tools like Ansible, Terraform, Docker, and GHAzDO (GitHub Advanced Security for Azure DevOps) to automate security scanning (SAST/DAST) and vulnerability remediation. Leveraged Power Automate to build scalable low-code solutions that enabled complex process automation and smoother handoffs to non-technical business units. Provided CI/CD pipeline support for both IaaS and PaaS deployments, embedding AI-driven tooling where applicable to improve deployment speed, reliability, and observability. Modernized our Quorum Land System and SAP S/4HANA infrastructure, migrating it to the cloud from an on-prem setup. Creating cloud based VMs with automated silent software installation, disaster recovery, and security logging across different production and regulatory compliance environments (S4 and ECC). Centralized cloud observability, telemetry, and security posture management across virtualized environments, delivering a new interface that improved scalability, availability, and proactive vulnerability detection. Automated ETL (Extract, Transform, and Load) processes to sanitize and transform SQL and ADLS (Azure Data Lake Storage) data; ensuring it was production-ready for use in analytics, reporting, and integration with external ERP applications. Administered business-critical Windows and Linux VMs, servers, and applications, ensuring stability and scalable performance. Designed and implemented secure, scalable LAN and WAN architectures across distributed environments, improving reliability and reducing downtime. Deployed and managed VPN solutions and secure cloud connectivity (DMVPN, IPSec, SSL VPN) for hybrid cloud and on-prem environments.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Azure
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Terraform
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Docker
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Ansible
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Power Automate
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    SQL
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Linux
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Windows Server
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              June 2021 – Feb 2023
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group-hover/link:text-accent text-base"
                    href="https://www.dell.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Software Engineer at Dell"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block lg:-inset-x-6 lg:-inset-y-4"></span>
                    <span>
                      Software Engineer ·{' '}
                      <span className="inline-block">
                        Dell
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Developed, maintained, and enhanced internal tools using Python, C#, and YAML — improving processing speed, eliminating bugs, and adding new features to streamline workflows and boost productivity. Cut burn cycle time by 15% through streamlining processes and eliminating workflow bottlenecks with targeted improvements. Developed automated software test scripts to ensure validity/correctness of software and enable continuous integration. Used smoke/sanity tests, functional tests, integration tests, and regression tests. Implemented infrastructure-as-code with Terraform and ARM templates to enable reproducible, consistent, and reliable deployments. Containerized legacy workloads using Docker and orchestrated deployments via Azure Kubernetes Service (AKS) to improve scalability and resilience. Implemented monitoring and alerting with Azure Monitor, Application Insights, and Log Analytics to proactively detect and resolve infrastructure issues, reducing MTTR. Analyzed test data to determine pain points and recommend improvements to better meet customer needs. Oversaw IAM governance for internal testing infrastructure, maintaining secure and compliant user access; led weekly company-wide integration test cycles to ensure end-to-end system quality and readiness. Performed verification and validation of production defect fixes in Azure-hosted and on-prem applications, ensuring stability and functionality for large-scale deployments. Improved security of company code and reduced known vulnerabilities by over 50% year over rear (YoY) through utilization of CI/CD tools such as Jenkins and Black Duck and updating code libraries to use more secure APIs. Managed projects related to various hardware, including HDD (hard disk drive), SSD(solid state drive), and other embedded systems to ensure project stayed of track and met customer expectations. Managed hardware-related projects and coordinated cross-functional teams to deliver solutions for enterprise clients, including numerous Fortune 500 companies, ensuring timely delivery and client satisfaction.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Python
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    C#
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    YAML
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Terraform
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Docker
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Azure Kubernetes Service
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Azure Monitor
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Jenkins
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Black Duck
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              June 2020 – July 2020
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group-hover/link:text-accent text-base"
                    href="https://www.dell.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Software Engineering Intern at Dell"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block lg:-inset-x-6 lg:-inset-y-4"></span>
                    <span>
                      Software Engineering Intern ·{' '}
                      <span className="inline-block">
                        Dell
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Created a web-based monitoring tool enabling facility staff to view, manage, and analyze over 200 internet-connected devices, consolidating key operational metrics into a centralized dashboard. Delivered actionable insights through reporting and visualization features that improved visibility into device health and product lifecycle progress. Reduced manual troubleshooting time by several hours per week by automating device discovery, management, and alerting workflows, significantly improving operational efficiency. Served as Product Owner during Agile sprints, driving the end-to-end development lifecycle including requirements gathering, backlog prioritization, sprint planning, and release management. Designed and implemented extensible features to support scaling to additional device types and capture richer metadata, laying the foundation for the production system in use today. Performed comprehensive QA, including usability testing, regression testing, and black-box validation to ensure reliability and user acceptance. Collaborated cross-functionally with systems engineering and IT teams to integrate the tool into existing infrastructure and align with security policies.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    HTML
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    SQL
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
              May 2019 – August 2019
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-accent focus-visible:text-accent group-hover/link:text-accent text-base"
                    href="https://www.intel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Software Engineering Intern at Intel"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:block lg:-inset-x-6 lg:-inset-y-4"></span>
                    <span>
                      Software Engineering Intern ·{' '}
                      <span className="inline-block">
                        Intel
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </h3>
              <p className="mt-2 text-sm leading-normal">
                Automated validation workflows for firmware and hardware compliance, developing scripts and tooling to accelerate testing against customer specifications and internal standards. Conducted in-depth defect analysis and system-level testing to identify critical gaps in new and custom product integrations, ensuring high-quality deliverables for enterprise customers. Assisted in coordinating non-functional testing activities—including performance, concurrency, and penetration testing—to validate robustness and security of platforms. Migrated legacy codebase from IPMI to Redfish APIs, modernizing management interfaces and improving maintainability, compatibility, and security of system interactions. Developed reusable test assets and documentation to streamline onboarding and reduce ramp-up time for new validation engineers. Collaborated with firmware, security, and platform engineering teams to resolve cross-domain issues and improve test coverage across multiple product lines.
              </p>
              <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Python
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    IPMI
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                    Redfish APIs
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
