import React, { useState, useEffect } from 'react';
import '../CSS/MainScreenCSS.css';

const MainScreen = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioData = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/rahulsharma",
    github: "https://github.com/rahulsharma",
    technicalSkills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Web Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Android Development", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
      { name: "XML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Spring-Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "React.Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "UI/UX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ],
    experience: [
      {
        role: "Software Development Intern",
        company: "TechNova Solutions",
        description: "Developed and optimized RESTful APIs using Spring-Boot and managed complex database schemas in MySQL. Improved application performance by 25% through efficient coding practices. Collaborated with senior engineers on frontend integration.",
        duration: "Jun 2023 - Aug 2023"
      },
      {
        role: "Web Intern",
        company: "Digital Dreamers",
        description: "Worked on responsive web designs using React.js and CSS. Translated UI/UX designs into functional components with high performance. Participated in daily stand-ups and code reviews.",
        duration: "Jan 2023 - May 2023"
      }
    ],
    projects: [
      {
        name: "E-Commerce Platform",
        liveUrl: "#",
        githubUrl: "#",
        tech: ["React.Js", "Node.Js", "MongoDB", "CSS"],
        description: [
          "Implemented secure user authentication and payment gateway integration.",
          "Designed responsive product catalog with advanced filtering.",
          "Real-time order tracking and inventory management system."
        ],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Task Management App",
        liveUrl: "#",
        githubUrl: "#",
        tech: ["Java", "Spring-Boot", "MySQL"],
        description: [
          "Built RESTful APIs for task CRUD operations.",
          "Implemented role-based access control for teams.",
          "Notification system for upcoming deadlines and task updates."
        ],
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    education: [
      {
        level: "Graduation",
        qualification: "Bachelor Of Technology (B.Tech)",
        institution: "SRM Institute of Science and Technology",
        location: "Chennai, Tamil Nadu",
        board: null,
        knowledge: ["Java", "HTML", "CSS", "JavaScript", "React.Js"],
        gpa: "8.5",
        period: "Aug 2019 - May 2023"
      },
      {
        level: "Intermediate",
        qualification: "12th",
        institution: "Narayana Junior College",
        location: "Vijayawada, Andhra Pradesh",
        board: "Board of Intermediate Education Andhra Pradesh",
        knowledge: ["Maths", "Physics", "Chemistry"],
        gpa: "9.8",
        period: "Jun 2017 - Mar 2019"
      },
      {
        level: "School",
        qualification: "10th",
        institution: "Ravindra Bharathi School",
        location: "Guntur, Andhra Pradesh",
        board: "Board of Secondary Education Andhra Pradesh",
        knowledge: ["Telugu", "Hindi", "English", "Maths", "Science", "Social"],
        gpa: "9.5",
        period: "Jun 2016 - Apr 2017"
      }
    ],
    achievements: [
      { title: "Hackathon Winner 2022", desc: "Secured 1st place in the National Level Smart India Hackathon for developing an innovative solution for waste management using IoT and Cloud technologies." },
      { title: "Best Coder Award", desc: "Recognized as the 'Best Coder' in the annual college tech fest for solving complex algorithmic problems efficiently in Java." }
    ],
    responsibilities: [
      { title: "Technical Lead - Coding Club", desc: "Led a team of 50+ members, organized weekly coding contests, and conducted workshops on Web Development and Data Structures, impacting over 200 students." },
      { title: "Event Coordinator", desc: "Managed logistics and scheduling for the annual technical symposium, coordinating with 10+ sponsors and ensuring smooth execution of 15+ events." }
    ],
    certificates: [
      { title: "AWS Certified Cloud Practitioner", desc: "Validated overall understanding of the AWS Cloud platform, including basic security and compliance aspects." },
      { title: "Full Stack Web Development", desc: "Completed intensive bootcamp covering React, Node.js, Express, and MongoDB with hands-on projects." },
      { title: "Java Programming Masterclass", desc: "Advanced concepts in Java including multithreading, collections framework, and database connectivity." }
    ]
  };

  return (
    <div id="main-container" className="main-container">
      {/* Navigation */}
      <nav id="navbar" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <h2 className="logo" id="site-logo">Portfolio<span>.</span></h2>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle" id="theme-btn">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-up" id="full-name">Hi, I'm <span className="highlight">{portfolioData.name}</span></h1>
            <p className="hero-subtitle animate-up delay-1">Full Stack Developer passionate about building scalable web applications and intuitive user experiences.</p>
            <div className="contact-info animate-up delay-2">
              <span className="contact-item" id="mail-id">📧 {portfolioData.email}</span>
              <span className="contact-item" id="phone-number">📞 {portfolioData.phone}</span>
            </div>
            <div className="social-links animate-up delay-3">
              <a href={portfolioData.linkedin} className="social-btn linkedin-btn" id="linkedin-link" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href={portfolioData.github} className="social-btn github-btn" id="github-link" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          <div className="hero-avatar-container animate-scale">
            <div className="avatar-glow"></div>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&top=shortHair&accessoriesColor=262e33&facialHair=beardLight&facialHairColor=2c1b18&clothing=shirtVNeck&clothingColor=3c4e5e&hairColor=2c1b18" alt="Male Avatar" className="hero-avatar" id="user-avatar" />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">Technical <span className="highlight">Skills</span></h2>
        <div className="skills-grid" id="technical-skills-grid">
          {portfolioData.technicalSkills.map((skill) => (
            <div className="skill-item-card card" key={skill.name}>
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <h2 className="section-title">Featured <span className="highlight">Projects</span></h2>
        <div className="projects-grid" id="projects-container">
          {portfolioData.projects.map((project, index) => (
            <div className="project-card card" key={index} id={`project-${index}`}>
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-overlay">
                  <a href={project.liveUrl} className="overlay-link">Live Demo</a>
                  <a href={project.githubUrl} className="overlay-link">GitHub Code</a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tech">
                  {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <ul className="project-desc">
                  {project.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <h2 className="section-title">Work <span className="highlight">Experience</span></h2>
        <div className="experience-container" id="experience-list">
          {portfolioData.experience.map((exp, idx) => (
            <div className="experience-card card" key={idx}>
              <div className="exp-header">
                <h3 className="exp-role">{exp.role}</h3>
                <span className="exp-duration">{exp.duration}</span>
              </div>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-desc">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <h2 className="section-title">My <span className="highlight">Education</span></h2>
        <div className="education-timeline" id="education-timeline">
          {portfolioData.education.map((edu, idx) => (
            <div className="edu-item" key={idx}>
              <div className="edu-dot"></div>
              <div className="edu-card card">
                <div className="edu-header">
                  <h3 className="edu-qual">{edu.qualification} <span className="edu-level">({edu.level})</span></h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-inst">{edu.institution}</p>
                <p className="edu-loc">📍 {edu.location}</p>
                {edu.board && <p className="edu-board"><strong>Board:</strong> {edu.board}</p>}
                <div className="edu-knowledge">
                  <strong>Knowledge Gained:</strong>
                  <div className="knowledge-tags">
                    {edu.knowledge.map(k => <span key={k} className="k-tag">{k}</span>)}
                  </div>
                </div>
                <div className="edu-gpa">GPA: <span className="gpa-score">{edu.gpa}/10.0</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Responsibilities */}
      <section className="section split-section">
        <div className="achievements-col" id="achievements-section">
          <h2 className="section-title"><span className="icon">🏆</span> Achievements</h2>
          {portfolioData.achievements.map((item, i) => (
            <div className="mini-card card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="responsibility-col" id="responsibility-section">
          <h2 className="section-title"><span className="icon">🤝</span> Responsibilities</h2>
          {portfolioData.responsibilities.map((item, i) => (
            <div className="mini-card card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section certificates-section">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid" id="certificates-grid">
          {portfolioData.certificates.map((cert, i) => (
            <div className="cert-card card" key={i}>
              <div className={`cert-icon-box box-${i % 3}`}>📜</div>
              <div className="cert-content">
                <h4>{cert.title}</h4>
                <p>{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="main-footer">
        <p>© 2024 {portfolioData.name}. All rights reserved.</p>
        <p>Built with ❤️ using React & Real DevIcons</p>
      </footer>
    </div>
  );
};

export default MainScreen;
