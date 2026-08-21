/* eslint-disable react/jsx-key */

const containt = [
  {
    smallTitle: 'Process',
    bigTitle: 'Software Engineering Process',
    desc: [
      <div className="p-l">How I build high-quality systems. I follow a structured engineering lifecycle,</div>,
      <div className="p-l">ensuring requirements are clear, designs are scalable, and code is verified.</div>,
    ],
    descMobile: [<div className="p-l">My structured engineering lifecycle to ensure high-quality software.</div>],
    options: [
      { title: '1. Requirements & System Design', desc: 'Analyzing bottlenecks, mapping data flows, and defining microservices boundary states' },
      { title: '2. Architecture & Database Design', desc: 'Selecting appropriate data models (SQL vs NoSQL), database tuning, and interfaces' },
      { title: '3. Test-Driven Development & Agile', desc: 'Writing clean code incrementally, maintaining fast feedback loops, and peer reviews' },
      { title: '4. Static Analysis & Verification', desc: 'Scanning with Coverity, checking SonarQube quality gates, and system integration testing' },
      { title: '5. Automated Deployment & Monitoring', desc: 'Setting up automated CI/CD pipelines via Azure DevOps Server for seamless deployments' },
    ],
  },
  {
    smallTitle: 'Values',
    bigTitle: 'Professional Values & Philosophy',
    desc: [<div className="p-l">Core principles that guide my decisions. Anything that helps establish a</div>, <div className="p-l">reliable, productive, and modern engineering relationship.</div>],
    descMobile: [<div className="p-l">Core principles guiding my design decisions and collaboration style.</div>],
    options: [
      { title: 'A. Simplicity & Readability First', desc: 'Code is read more than it is written. Simple patterns outperform clever hacks' },
      { title: 'B. User-Centric Problem Solving', desc: 'Every line of code should solve a friction point or create direct user value' },
      { title: 'C. Extreme Ownership', desc: 'Taking responsibility for reliability, security, performance, and documentation' },
      { title: 'D. Rigorous Code Verification', desc: 'Testing is not an afterthought; code is only complete once it is verified' },
      { title: 'E. Continuous Learning', desc: 'Proactively exploring new frameworks, languages, and AI/ML model architectures' },
    ],
  },
];
export default containt;
