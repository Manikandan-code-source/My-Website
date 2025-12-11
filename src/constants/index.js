import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate Junior Software Developer with 2.5 years of hands-on experience in full-stack development, specializing in authentication systems and scalable web applications. My expertise spans across modern JavaScript frameworks (React.js, Angular.js, Next.js), backend technologies (Node.js, Express.js, .NET), and cloud platforms (AWS). With a strong foundation in Computer Science Engineering and a commitment to continuous learning, I excel at building robust solutions that enhance user experience and drive business value. I thrive in collaborative environments where I can contribute to architectural decisions and mentor peers while advancing my technical expertise.`;

export const ABOUT_TEXT = `As a versatile software developer, I have successfully delivered enterprise-grade solutions for clients across diverse domains including e-commerce, loyalty programs, and quality management systems. My proficiency in both frontend and backend technologies allows me to architect complete solutions from concept to deployment. I have hands-on experience with cloud infrastructure (AWS EC2, S3, CloudFront), database management (MongoDB, PostgreSQL, MSSQL), and DevOps practices including CI/CD pipelines. My engineering background enables me to approach complex problems methodically, ensuring scalable and maintainable code architecture while maintaining a strong focus on security, performance, and user experience.`;

export const EXPERIENCES = [
  {
    year: "March 2023 - June 2023",
    role: "Web Developer Intern",
    company: "DotWorld Technologies Private Limited",
    description: `Gained foundational experience in modern web development by actively participating in agile development cycles. Contributed to multiple projects by implementing responsive UI components using React.js and managing state effectively. Developed RESTful APIs with Node.js and Express.js, integrating MongoDB for data persistence. Participated in daily scrum meetings, collaborated on code reviews, and followed Git workflows for version control. Built strong fundamentals in full-stack development while ensuring code quality and adherence to project timelines.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB", "Express.js", "Node.js", "Git"],
  },
  {
    year: "July 2023 - September 2024",
    role: "Junior Software Developer",
    company: "Toverto Solutions Private Limited",
    description: `Led frontend development for enterprise applications including Cotton Foundation and Landry's Select Club (USA). Implemented comprehensive authentication systems, user profile management, and secure payment integrations. Developed responsive web applications using React.js with .NET backend and PostgreSQL databases. Architected AWS cloud solutions using EC2, S3, CloudFront, SNS, and SQS services. Collaborated with UX designers to create intuitive interfaces and conducted performance optimization for mobile and web platforms. Implemented secure data encryption protocols and integrated third-party APIs for enhanced functionality.`,
    technologies: ["JavaScript", "React.js", "Angular.js", "Next.js", ".NET", "PostgreSQL", "MongoDB", "AWS", "Firebase", "TypeScript"],
  },
  {
    year: "February 2025 - Present",
    role: "Junior Software Developer",
    company: "Angler Technologies Private Limited",
    description: `Developing and maintaining an enterprise-grade Audit-based IMS-QMS module for KSB India Private Limited. Implementing comprehensive user management systems with role-based access controls and permission hierarchies. Designing master configuration modules for audit checklists, workflows, and compliance tracking. Building scalable RESTful APIs using Node.js and Express.js with MongoDB integration. Implementing responsive frontend interfaces using React.js with state management. Deploying applications on AWS infrastructure with CI/CD pipelines and ensuring high availability through PM2 process management. Contributing to architectural decisions for scalable microservices architecture.`,
    technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "MSSQL", "AWS", "PM2", "Redux", "Docker", "Jenkins", "Kubernetes"]
  }
];

export const PROJECTS = [
  {
    title: "Cotton Foundation (USA)",
    image: project1,
    description: "A dynamic e-commerce platform for sustainable cotton products featuring product catalog, shopping cart, secure checkout, and user authentication. Implemented responsive design, real-time inventory management, and integrated payment gateways.",
    technologies: ["React.js", ".NET", "PostgreSQL", "Firebase", "AWS S3", "CloudFront"],
    link: "https://cotton-foundation.com",
    responsibility: "Full Stack Developer - Contributed to both frontend and backend development, implemented new features, resolved bugs, optimized performance"
  },
  {
    title: "Landry's Select Club (USA)",
    image: project2,
    description: "Mobile loyalty application with authentication, profile management, feedback systems, and third-party API integrations. Implemented secure data encryption, intuitive UX/UI design, and comprehensive testing protocols.",
    technologies: ["React.js", ".NET", "AWS EC2", "S3", "Beanstalk", "CloudFront", "SNS", "SQS"],
    link: "https://landrys-select-club.com",
    responsibility: "Lead Frontend Developer - Spearheaded API integrations, designed user interfaces, implemented security protocols, collaborated with QA teams"
  },
  {
    title: "KSB India - Audit Management System",
    image: project3,
    description: "Enterprise Audit-based IMS-QMS module with user management, audit checklist configuration, workflow automation, and compliance tracking. Features role-based access control, audit trail, and reporting dashboard.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS", "Redux", "PM2"],
    link: "https://ksb-india-system.com",
    responsibility: "Full Stack Developer - Developed audit modules, implemented user management, configured masters, ensured compliance tracking"
  }
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu, India",
  phoneNo: "+91 6374453187",
  email: "baridurati234@gmail.com",
  github: "https://github.com/Manikandan-code-source",
  linkedin: "https://linkedin.com/in/manikandan-durairaj",
  portfolio: "https://manikandan-durairaj.netlify.app"
};

export const SKILLS = {
  frontend: ["React.js", "React-Native", "Angular.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Redux", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", ".NET", "Java", "Python"],
  databases: ["MongoDB", "PostgreSQL", "MSSQL", "MySQL", "Firebase"],
  cloud: ["AWS (EC2, S3, CloudFront, Beanstalk, SNS, SQS)", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
  tools: ["Git", "PM2", "Webpack", "Postman", "VS Code", "JIRA"]
};

export const EDUCATION = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Karpagam College of Engineering",
  period: "2017 - 2021",
  grade: "7.1 CGPA",
  location: "Coimbatore, India"
};

export const CERTIFICATIONS = [
  {
    title: "The Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    period: "January 2024 - July 2024",
    description: "Comprehensive training in modern web development technologies and best practices"
  },
  {
    title: "Java Programming for Complete Beginners",
    issuer: "Udemy",
    period: "March 2023 - July 2023",
    description: "Fundamental Java programming concepts and object-oriented design principles"
  }
];