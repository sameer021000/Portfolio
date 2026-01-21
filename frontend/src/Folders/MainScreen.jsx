import { useState, useEffect } from "react"
import "../CSS/MainScreenCSS.css"
import "../CSS/Animations.css"
import "../CSS/SkillCategories.css"
import Lottie from "lottie-react"
import devAnimation from "../Assets/Male_Avatar.json"
import { portfolioData, skillCategories, categoryIcons } from "../Data/PortfolioData"

const MainScreen = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [displayText, setDisplayText] = useState({ part1: "", part2: "" })
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showImage, setShowImage] = useState(false)

  //Top Scroll bar
  const [scrollProgress, setScrollProgress] = useState(0)

  //Page entrance animation
  const [pageLoaded, setPageLoaded] = useState(false)

  //Cursor glow effect (Desktop)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  //Auto-Scroll
  const [isCertHover, setIsCertHover] = useState(false)



  const name = portfolioData.name

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 400)

      //Top Scroll bar
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)

    const flipInterval = setInterval(() => {
      setShowImage((prev) => !prev)
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(flipInterval)
    }
  }, [])

  // Typing Effect (Delayed until page load)
  useEffect(() => {
    if (!pageLoaded) return

    const fullTextPart1 = "Hi, I'm "
    const fullTextPart2 = name || "Sameer Shaik"
    let charIndex = 0

    const typingInterval = setInterval(() => {
      if (charIndex <= fullTextPart1.length) {
        setDisplayText((prev) => ({ ...prev, part1: fullTextPart1.substring(0, charIndex) }))
      } else if (charIndex <= fullTextPart1.length + fullTextPart2.length) {
        const p2Index = charIndex - fullTextPart1.length
        setDisplayText((prev) => ({ ...prev, part2: fullTextPart2.substring(0, p2Index) }))
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
      charIndex++
    }, 75)

    return () => clearInterval(typingInterval)
  }, [name, pageLoaded])

  //Page entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 700)

    return () => clearTimeout(timer)
  }, [])

  //Cursor glow effect (Desktop)
  useEffect(() => {
    if (window.innerWidth <= 1024) return

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  //Auto-Scroll
  useEffect(() => {
    const container = document.getElementById("certificates-grid")
    if (!container) return

    const cards = container.querySelectorAll(".cert-card")
    if (!cards.length) return

    let currentIndex = 0
    let intervalId

    const scrollToCard = () => {
      if (isCertHover) return

      currentIndex = (currentIndex + 1) % cards.length

      const targetCard = cards[currentIndex]
      container.scrollTo({
        left: targetCard.offsetLeft - 12, // small padding offset
        behavior: "smooth",
      })
    }

    intervalId = setInterval(scrollToCard, 1500) // 👈 card-by-card timing

    return () => clearInterval(intervalId)
  }, [isCertHover])

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleMenuBackdropClick = () => {
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      // ... (code omitted for brevity if duplicate, but I need to include full method to replace safely or just the constant)
    })
  }
  //Click to flip
  const handleAvatarClick = () => {
    setShowImage((prev) => !prev)
  }

  return (
    <div id="main-container" className="main-container">
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
      </div>
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      <nav
        id="navbar"
        className={`navbar ${pageLoaded ? "page-enter-nav" : "page-enter-init"} ${isScrolled ? "scrolled" : ""
          }`}
      >
        <div className="nav-content">
          <button
            className="hamburger-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            id="hamburger-btn"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          <h2 className="logo" id="site-logo">
            Portfolio
          </h2>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>

          <button onClick={toggleTheme} className="theme-toggle" id="theme-btn" aria-label="Toggle theme">
            <div className="theme-icon-wrapper">
              {theme === "light" ? (
                <svg
                  className="theme-icon moon-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg
                  className="theme-icon sun-icon"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </div>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={handleMenuBackdropClick} id="menu-backdrop"></div>
      )}

      <div className={`mobile-side-menu ${isMobileMenuOpen ? "active" : ""}`} id="mobile-menu">
        <ul className="mobile-nav-links">
          <li>
            <a href="#home" onClick={handleNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#education" onClick={handleNavClick}>
              Education
            </a>
          </li>
          <li>
            <a href="#experience" onClick={handleNavClick}>
              Experience
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className={`hero-text ${pageLoaded ? "page-enter-hero" : "page-enter-init"}`}>
            <h1 className="hero-title" id="full-name">
              {displayText.part1}
              <span className="highlight">{displayText.part2}</span>
              {!isTypingComplete && <span className="typing-cursor">|</span>}
            </h1>
            <p className="hero-subtitle animate-up delay-1">
              Full Stack Developer passionate about building scalable web applications and intuitive user experiences.
            </p>
            <div className="contact-info animate-up delay-2">
              <a className="contact-item" id="mail-id" href={`mailto:${portfolioData.email}`}>
                📧 {portfolioData.email}
              </a>
              <a className="contact-item" id="phone-number" href={`tel:${portfolioData.phone}`}>
                📞 {portfolioData.phone}
              </a>
            </div>
            <div className="social-links animate-up delay-3">
              <a href={portfolioData.linkedin} className="social-btn linkedin-btn" id="linkedin-link" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href={portfolioData.github} className="social-btn github-btn" id="github-link" title="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          <div
            onClick={handleAvatarClick}
            className={`hero-avatar-container animate-scale ${pageLoaded ? "page-enter-avatar" : "page-enter-init"
              } ${showImage ? "flipped" : ""}`}
          >
            <div className="avatar-glow"></div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Lottie animationData={devAnimation} loop className="hero-avatar" />
                </div>
                <div className="flip-card-back">
                  <img src="/My_profile_pic.jpg" alt="Sameer Shaik" className="hero-avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title scroll-animate">
          Technical <span className="highlight">Skills</span>
        </h2>

        <div className="skills-categories-container">
          {Object.entries(skillCategories).map(([category, skillNames], idx) => (
            <div key={category} className={`skill-category-group scroll-animate delay-${(idx % 3) + 1}`}>
              <h3 className="skill-category-title">
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {category} {categoryIcons[category]}
                </span>
              </h3>
              <div className="skills-grid">
                {portfolioData.technicalSkills
                  .filter((skill) => skillNames.includes(skill.name))
                  .map((skill) => (
                    <div
                      className={`skill-item-card card ${skill.name.includes("React")
                        ? "skill-react"
                        : skill.name.includes("Java") && !skill.name.includes("JavaScript")
                          ? "skill-java"
                          : skill.name.includes("JavaScript")
                            ? "skill-js"
                            : skill.name.includes("Git")
                              ? "skill-git"
                              : ["HTML", "CSS", "UI/UX", "XML"].includes(skill.name)
                                ? "skill-ui"
                                : ["Node.Js", "Spring-Boot"].includes(skill.name)
                                  ? "skill-backend"
                                  : ["MySQL", "MongoDB"].includes(skill.name)
                                    ? "skill-db"
                                    : ""
                        }`}
                      key={skill.name}
                    >
                      <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="skill-logo" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <h2 className="section-title scroll-animate">
          Featured <span className="highlight">Projects</span>
        </h2>
        <div className="projects-grid scroll-animate" id="projects-container">
          {portfolioData.projects.map((project, index) => (
            <div className="project-card card" key={index} id={`project-${index}`}>
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="project-overlay">
                  <a href={project.liveUrl} className="overlay-link">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="overlay-link">
                    GitHub Code
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="project-desc">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <h2 className="section-title scroll-animate">
          Work <span className="highlight">Experience</span>
        </h2>
        <div className="experience-container scroll-animate" id="experience-list">
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
        <h2 className="section-title scroll-animate">
          My <span className="highlight">Education</span>
        </h2>
        <div className="education-timeline scroll-animate" id="education-timeline">
          {portfolioData.education.map((edu, idx) => (
            <div className="edu-item" key={idx}>
              <div className="edu-dot"></div>
              <div className="edu-card card">
                <div className="edu-header">
                  <h3 className="edu-qual">
                    {edu.qualification} <span className="edu-level">({edu.level})</span>
                  </h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-inst">{edu.institution}</p>
                <p className="edu-loc">📍 {edu.location}</p>
                {edu.board && (
                  <p className="edu-board">
                    <strong>Board:</strong> {edu.board}
                  </p>
                )}
                <div className="edu-knowledge">
                  <strong>Knowledge Gained:</strong>
                  <div className="knowledge-tags">
                    {edu.knowledge.map((k) => (
                      <span key={k} className="k-tag">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="edu-gpa">
                  GPA: <span className="gpa-score">{edu.gpa}/10.0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements & Responsibilities */}
      <section className="section split-section">
        <div className="achievements-col scroll-animate" id="achievements-section">
          <h2 className="section-title scroll-animate">
            <span className="icon">🏆</span> Achievements
          </h2>
          {portfolioData.achievements.map((item, i) => (
            <div className="mini-card card" key={i}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="responsibility-col scroll-animate" id="responsibility-section">
          <h2 className="section-title scroll-animate">
            <span className="icon">🤝</span> Responsibilities
          </h2>
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
        <h2 className="section-title scroll-animate">Certifications</h2>
        <div className="cert-grid horizontal-scroll scroll-animate" id="certificates-grid"
          onMouseEnter={() => setIsCertHover(true)}
          onMouseLeave={() => setIsCertHover(false)}
          onTouchStart={() => setIsCertHover(true)}
          onTouchEnd={() => setIsCertHover(false)}
        >
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
        <p>© 2025 {portfolioData.name}. All rights reserved.</p>
        <p>Built with ❤️ using React & Real DevIcons</p>
      </footer>

      {/* Scroll to Top Button */}
      <button
        id="scroll-to-top"
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <div className="scroll-btn-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 19V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V19h2z" />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default MainScreen;