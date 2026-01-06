"use client"

import { useState, useEffect } from "react"
import "../CSS/MainScreenCSS.css"

function MainScreen() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "heroSection",
        "languagesToolsSection",
        "techSection",
        "experienceSection",
        "projectsSection",
        "educationSection",
        "achievementsSection",
        "porSection",
        "certificatesSection",
      ]

      let currentSection = "home"
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            currentSection = section
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setIsMenuOpen(false)
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div id="mainPage">
      <nav id="navbarTop">
        <div id="navbarContainer">
          <div id="navbarLogo">
            <span id="navbarLogoText">AK</span>
          </div>

          <button id="navbarToggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul id="navbarMenu" className={isMenuOpen ? "active" : ""}>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("heroSection")}
                className={activeSection === "heroSection" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("languagesToolsSection")}
                className={activeSection === "languagesToolsSection" ? "active" : ""}
              >
                Languages & Tools
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("techSection")}
                className={activeSection === "techSection" ? "active" : ""}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("experienceSection")}
                className={activeSection === "experienceSection" ? "active" : ""}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("projectsSection")}
                className={activeSection === "projectsSection" ? "active" : ""}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("educationSection")}
                className={activeSection === "educationSection" ? "active" : ""}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => scrollToSection("achievementsSection")}
                className={activeSection === "achievementsSection" ? "active" : ""}
              >
                Achievements
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="mainInner">
        {/* HERO / PROFILE */}
        <section id="heroSection">
          <div id="heroLeftSide">
            <div id="heroBadgeRow">
              <div id="heroBadgeMain">Software Engineer</div>
            </div>

            <h1 id="heroName">Aarav Devansh Kapoor</h1>

            <p id="heroSubtitle">
              Crafting immersive web experiences with clean code, modern animations, and thoughtful design.
            </p>

            <div id="heroContactRow">
              <div id="heroContactCard">
                <div id="heroContactLabel">Email</div>
                <div id="heroContactValue">aarav.kapoor.dev@example.com</div>
              </div>
              <div id="heroContactCardPhone">
                <div id="heroContactLabel">Phone</div>
                <div id="heroContactValue">+91 98765 43210</div>
              </div>
            </div>

            <div id="heroSocialRow">
              <a
                id="heroSocialLinkedin"
                href="https://www.linkedin.com/in/aarav-devansh-random"
                target="_blank"
                rel="noreferrer"
              >
                <div id="heroSocialCircleLinkedin">
                  <span id="heroSocialIconLinkedin">in</span>
                </div>
                <span id="heroSocialText">LinkedIn</span>
              </a>
              <a id="heroSocialGithub" href="https://github.com/aaravdevansh-random" target="_blank" rel="noreferrer">
                <div id="heroSocialCircleGithub">
                  <span id="heroSocialIconGithub"></span>
                </div>
                <span id="heroSocialText">GitHub</span>
              </a>
            </div>
          </div>

          <div id="heroRightSide">
            <div id="avatarOuterGlow">
              <div id="avatarOrbitOne"></div>
              <div id="avatarOrbitTwo"></div>
              <div id="avatarCard">
                <div id="avatarGradientRing">
                  <div id="avatarCircle">
                    <div id="avatarInnerFace">
                      <div id="avatarHair"></div>
                      <div id="avatarHead">
                        <div id="avatarEyesRow">
                          <span id="avatarEyeLeft"></span>
                          <span id="avatarEyeRight"></span>
                        </div>
                        <div id="avatarMouth"></div>
                      </div>
                      <div id="avatarBody">
                        <div id="avatarShirt"></div>
                        <div id="avatarJacket"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="avatarLabelBlock">
                  <div id="avatarNameLabel">Aarav Kapoor</div>
                  <div id="avatarRoleLabel">Full Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="languagesToolsSection">
          <h2 id="sectionTitle">
            Languages & <span id="sectionHighlight">Tools</span>
          </h2>
          <div id="languagesToolsGrid">
            <div id="langToolCategory">
              <div id="langToolCategoryTitle">Languages</div>
              <div id="langToolIconsRow">
                <div id="langToolIcon" title="Java" style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                  <span>Java</span>
                </div>
                <div
                  id="langToolIcon"
                  title="Python"
                  style={{ background: "linear-gradient(135deg, #3776ab, #2c5aa0)" }}
                >
                  <span>Py</span>
                </div>
                <div
                  id="langToolIcon"
                  title="JavaScript"
                  style={{ background: "linear-gradient(135deg, #facc15, #eab308)" }}
                >
                  <span>JS</span>
                </div>
                <div id="langToolIcon" title="PHP" style={{ background: "linear-gradient(135deg, #777bb4, #6b5fa8)" }}>
                  <span>PHP</span>
                </div>
                <div id="langToolIcon" title="HTML" style={{ background: "linear-gradient(135deg, #f97316, #fb923c)" }}>
                  <span>HTML</span>
                </div>
                <div id="langToolIcon" title="CSS" style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)" }}>
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div id="langToolCategory">
              <div id="langToolCategoryTitle">Frameworks & Libraries</div>
              <div id="langToolIconsRow">
                <div
                  id="langToolIcon"
                  title="React.js"
                  style={{ background: "linear-gradient(135deg, #61dafb, #41b8d5)" }}
                >
                  <span>React</span>
                </div>
                <div
                  id="langToolIcon"
                  title="Node.js"
                  style={{ background: "linear-gradient(135deg, #68a063, #5a8c56)" }}
                >
                  <span>Node</span>
                </div>
                <div
                  id="langToolIcon"
                  title="Spring Boot"
                  style={{ background: "linear-gradient(135deg, #6db33f, #5da238)" }}
                >
                  <span>Spring</span>
                </div>
              </div>
            </div>

            <div id="langToolCategory">
              <div id="langToolCategoryTitle">Databases & Tools</div>
              <div id="langToolIconsRow">
                <div
                  id="langToolIcon"
                  title="MySQL"
                  style={{ background: "linear-gradient(135deg, #00758f, #005a75)" }}
                >
                  <span>MySQL</span>
                </div>
                <div
                  id="langToolIcon"
                  title="MongoDB"
                  style={{ background: "linear-gradient(135deg, #13aa52, #0d7d3a)" }}
                >
                  <span>Mongo</span>
                </div>
                <div id="langToolIcon" title="Git" style={{ background: "linear-gradient(135deg, #f34f29, #d63f1d)" }}>
                  <span>Git</span>
                </div>
                <div
                  id="langToolIcon"
                  title="GitHub"
                  style={{ background: "linear-gradient(135deg, #333333, #1a1a1a)" }}
                >
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="techSection">
          <h2 id="sectionTitle">
            Technical <span id="sectionHighlight">Skills</span>
          </h2>
          <div id="techCategoriesGrid">
            <div id="techCategoryCardCore">
              <div id="techCategoryTitle">Core Languages</div>
              <div id="techChipsRow">
                <span id="techChip">Java</span>
                <span id="techChip">Python</span>
                <span id="techChip">PHP</span>
                <span id="techChip">JavaScript</span>
              </div>
            </div>

            <div id="techCategoryCardWeb">
              <div id="techCategoryTitle">Web Development</div>
              <div id="techChipsRow">
                <span id="techChip">HTML</span>
                <span id="techChip">CSS</span>
                <span id="techChip">React.js</span>
                <span id="techChip">Node.js</span>
                <span id="techChip">Web Development</span>
                <span id="techChip">UI/UX</span>
              </div>
            </div>

            <div id="techCategoryCardBackend">
              <div id="techCategoryTitle">Backend & Databases</div>
              <div id="techChipsRow">
                <span id="techChip">Spring Boot</span>
                <span id="techChip">MySQL</span>
                <span id="techChip">MongoDB</span>
              </div>
            </div>

            <div id="techCategoryCardOther">
              <div id="techCategoryTitle">Mobile & Tools</div>
              <div id="techChipsRow">
                <span id="techChip">Android Development</span>
                <span id="techChip">XML</span>
                <span id="techChip">Git</span>
                <span id="techChip">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section id="experienceSection">
          <h2 id="sectionTitle">
            Work <span id="sectionHighlight">Experience</span>
          </h2>
          <div id="experienceTimeline">
            <div id="experienceConnectorLine"></div>

            <div id="experienceCard">
              <div id="experienceDot"></div>
              <div id="experienceContent">
                <div id="experienceHeaderRow">
                  <div id="experienceTitleSide">
                    <div id="experienceRole">Senior Frontend Developer</div>
                    <div id="experienceCompany">Tech Innovations Inc.</div>
                  </div>
                  <div id="experienceMetaSide">
                    <div id="experienceDates">Jan 2022 - Present</div>
                  </div>
                </div>
                <div id="experienceDescriptionRow">
                  <ul id="experienceBulletList">
                    <li>
                      Led the redesign of core user-facing dashboard using React, improving load times by 40% and user
                      engagement by 35%.
                    </li>
                    <li>
                      Collaborated with backend engineers to optimize API integrations and implemented caching
                      strategies for better performance.
                    </li>
                    <li>
                      Mentored junior developers on React best practices, component architecture, and modern state
                      management patterns.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="experienceCard">
              <div id="experienceDot"></div>
              <div id="experienceContent">
                <div id="experienceHeaderRow">
                  <div id="experienceTitleSide">
                    <div id="experienceRole">Full Stack Developer</div>
                    <div id="experienceCompany">Digital Solutions Ltd.</div>
                  </div>
                  <div id="experienceMetaSide">
                    <div id="experienceDates">Jun 2020 - Dec 2021</div>
                  </div>
                </div>
                <div id="experienceDescriptionRow">
                  <ul id="experienceBulletList">
                    <li>
                      Built and deployed 5+ production-ready web applications using MERN stack, serving 50,000+ monthly
                      users.
                    </li>
                    <li>
                      Designed RESTful APIs with Node.js and Express, implemented database optimization strategies with
                      MongoDB indexing.
                    </li>
                    <li>
                      Developed automated testing suites achieving 85% code coverage and reduced production bugs by 30%.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="experienceCard">
              <div id="experienceDot"></div>
              <div id="experienceContent">
                <div id="experienceHeaderRow">
                  <div id="experienceTitleSide">
                    <div id="experienceRole">Junior Developer</div>
                    <div id="experienceCompany">StartUp Ventures</div>
                  </div>
                  <div id="experienceMetaSide">
                    <div id="experienceDates">Feb 2019 - May 2020</div>
                  </div>
                </div>
                <div id="experienceDescriptionRow">
                  <ul id="experienceBulletList">
                    <li>
                      Developed responsive UI components using HTML, CSS, and JavaScript, ensuring cross-browser
                      compatibility.
                    </li>
                    <li>
                      Fixed critical bugs and implemented feature requests, improving application stability and user
                      experience.
                    </li>
                    <li>
                      Participated in code reviews and contributed to team knowledge base with technical documentation.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projectsSection">
          <h2 id="sectionTitle">
            Featured <span id="sectionHighlight">Projects</span>
          </h2>
          <div id="projectsGrid">
            <article id="projectCard">
              <div id="projectHeaderRow">
                <div id="projectTitleArea">
                  <div id="projectName">Nyra Task Orbit</div>
                  <div id="projectTechBadgesRow">
                    <span id="projectTechBadge">React.js</span>
                    <span id="projectTechBadge">Node.js</span>
                    <span id="projectTechBadge">MongoDB</span>
                    <span id="projectTechBadge">Tailwind</span>
                  </div>
                </div>
                <div id="projectLinksArea">
                  <a id="projectLiveLink" href="https://nyra-task-orbit.live.example" target="_blank" rel="noreferrer">
                    Live
                  </a>
                  <a
                    id="projectCodeLink"
                    href="https://github.com/aaravdevansh-random/nyra-task-orbit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span id="projectCodeIcon"></span>
                  </a>
                </div>
              </div>
              <div id="projectDetailsRow">
                <div id="projectDescriptionCol">
                  <ul id="projectBulletList">
                    <li>
                      Built a responsive task workspace with drag-and-drop kanban boards and real-time progress
                      indicators.
                    </li>
                    <li>Implemented JWT authentication and role-based access to securely isolate team workspaces.</li>
                    <li>
                      Added animated micro-interactions for status changes and due-date alerts to improve engagement.
                    </li>
                  </ul>
                </div>
                <div id="projectMetaCol">
                  <div id="projectMetaLabel">Stack</div>
                  <p id="projectMetaText">React, Node.js, Express, MongoDB, JWT, Framer Motion</p>
                </div>
              </div>
            </article>

            <article id="projectCard">
              <div id="projectHeaderRow">
                <div id="projectTitleArea">
                  <div id="projectName">PulseFit Analytics</div>
                  <div id="projectTechBadgesRow">
                    <span id="projectTechBadge">Java</span>
                    <span id="projectTechBadge">Spring Boot</span>
                    <span id="projectTechBadge">MySQL</span>
                  </div>
                </div>
                <div id="projectLinksArea">
                  <a
                    id="projectLiveLink"
                    href="https://pulsefit-analytics.live.example"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    id="projectCodeLink"
                    href="https://github.com/aaravdevansh-random/pulsefit-analytics"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span id="projectCodeIcon"></span>
                  </a>
                </div>
              </div>
              <div id="projectDetailsRow">
                <div id="projectDescriptionCol">
                  <ul id="projectBulletList">
                    <li>Designed a fitness metrics dashboard with animated charts and daily progress insights.</li>
                    <li>Developed REST APIs in Spring Boot with layered architecture and DTO mappings.</li>
                    <li>Optimized complex SQL queries and indexing to generate weekly reports under 200 ms.</li>
                  </ul>
                </div>
                <div id="projectMetaCol">
                  <div id="projectMetaLabel">Stack</div>
                  <p id="projectMetaText">Java, Spring Boot, MySQL, Charting library, Docker</p>
                </div>
              </div>
            </article>

            <article id="projectCard">
              <div id="projectHeaderRow">
                <div id="projectTitleArea">
                  <div id="projectName">CampusConnect Nexus</div>
                  <div id="projectTechBadgesRow">
                    <span id="projectTechBadge">React.js</span>
                    <span id="projectTechBadge">Node.js</span>
                    <span id="projectTechBadge">MongoDB</span>
                  </div>
                </div>
                <div id="projectLinksArea">
                  <a
                    id="projectLiveLink"
                    href="https://campusconnect-nexus.live.example"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    id="projectCodeLink"
                    href="https://github.com/aaravdevansh-random/campusconnect-nexus"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span id="projectCodeIcon"></span>
                  </a>
                </div>
              </div>
              <div id="projectDetailsRow">
                <div id="projectDescriptionCol">
                  <ul id="projectBulletList">
                    <li>Created a central hub for clubs, events, and resources with mobile-first navigation.</li>
                    <li>Implemented notification streams and event reminders with smooth entry animations.</li>
                    <li>Integrated role-based dashboards for students, mentors, and administrators.</li>
                  </ul>
                </div>
                <div id="projectMetaCol">
                  <div id="projectMetaLabel">Stack</div>
                  <p id="projectMetaText">React, Node.js, MongoDB, WebSockets, JWT</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="educationSection">
          <h2 id="sectionTitle">
            Education <span id="sectionHighlight">Journey</span>
          </h2>
          <div id="educationTimeline">
            <div id="educationConnectorLine"></div>

            <div id="educationCard">
              <div id="educationDot"></div>
              <div id="educationContent">
                <div id="educationHeaderRow">
                  <div id="educationTitleSide">
                    <div id="educationInstitution">Meridian High School</div>
                    <div id="educationLocation">Visakhapatnam, Andhra Pradesh</div>
                  </div>
                  <div id="educationMetaSide">
                    <div id="educationDegree">10th</div>
                    <div id="educationBoard">Board of Secondary Education Andhra Pradesh</div>
                    <div id="educationDates">June 2015 - April 2016</div>
                    <div id="educationGPA">GPA: 9.4 / 10.0</div>
                  </div>
                </div>
                <div id="educationKnowledgeRow">
                  <div id="educationKnowledgeLabel">Knowledge</div>
                  <div id="educationTagsRow">
                    <span id="educationTag">Telugu</span>
                    <span id="educationTag">Hindi</span>
                    <span id="educationTag">English</span>
                    <span id="educationTag">Maths</span>
                    <span id="educationTag">Science</span>
                    <span id="educationTag">Social</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="educationCard">
              <div id="educationDot"></div>
              <div id="educationContent">
                <div id="educationHeaderRow">
                  <div id="educationTitleSide">
                    <div id="educationInstitution">Sri Aditya Junior College</div>
                    <div id="educationLocation">Rajahmundry, Andhra Pradesh</div>
                  </div>
                  <div id="educationMetaSide">
                    <div id="educationDegree">12th</div>
                    <div id="educationBoard">Board of Intermediate Education Andhra Pradesh</div>
                    <div id="educationDates">June 2016 - March 2018</div>
                    <div id="educationGPA">GPA: 9.1 / 10.0</div>
                  </div>
                </div>
                <div id="educationKnowledgeRow">
                  <div id="educationKnowledgeLabel">Knowledge</div>
                  <div id="educationTagsRow">
                    <span id="educationTag">Maths</span>
                    <span id="educationTag">Physics</span>
                    <span id="educationTag">Chemistry</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="educationCard">
              <div id="educationDot"></div>
              <div id="educationContent">
                <div id="educationHeaderRow">
                  <div id="educationTitleSide">
                    <div id="educationInstitution">Horizon Institute of Technology</div>
                    <div id="educationLocation">Hyderabad, Telangana</div>
                  </div>
                  <div id="educationMetaSide">
                    <div id="educationDegree">Bachelor of Technology (B.Tech)</div>
                    <div id="educationBoard">Computer Science Engineering</div>
                    <div id="educationDates">August 2018 - May 2022</div>
                    <div id="educationGPA">GPA: 8.7 / 10.0</div>
                  </div>
                </div>
                <div id="educationKnowledgeRow">
                  <div id="educationKnowledgeLabel">Knowledge</div>
                  <div id="educationTagsRow">
                    <span id="educationTag">Java</span>
                    <span id="educationTag">HTML</span>
                    <span id="educationTag">CSS</span>
                    <span id="educationTag">JavaScript</span>
                    <span id="educationTag">React.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="achievementsSection">
          <h2 id="sectionTitle">
            Achievements <span id="sectionHighlight">& Highlights</span>
          </h2>
          <div id="achievementsGrid">
            <div id="achievementCard">
              <div id="achievementTitle">Winner, Cloud Native HackFest</div>
              <p id="achievementDescription">
                Led a 4-member team to build a real-time collaboration board using microservices and containerized
                deployments.
              </p>
            </div>

            <div id="achievementCard">
              <div id="achievementTitle">Global Java Coding Challenge</div>
              <p id="achievementDescription">
                Ranked among top performers with 12,000+ participants in a time-bound algorithmic challenge.
              </p>
            </div>

            <div id="achievementCard">
              <div id="achievementTitle">Campus Developer Recognition</div>
              <p id="achievementDescription">
                Recognized for contributions to developer clubs, workshops, and mentoring peers.
              </p>
            </div>
          </div>
        </section>

        <section id="porSection">
          <h2 id="sectionTitle">
            Positions of <span id="sectionHighlight">Responsibility</span>
          </h2>
          <div id="porGrid">
            <div id="porCard">
              <div id="porPosition">Lead, Developer Students Club</div>
              <p id="porDescription">
                Organized technical meetups, conducted hands-on sessions on React and APIs, and coordinated
                inter-college hackathons with 200+ participants.
              </p>
            </div>

            <div id="porCard">
              <div id="porPosition">Project Mentor</div>
              <p id="porDescription">
                Mentored junior teams on developing full-stack applications, reviewing code, and refining UI/UX for
                real-world usability.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificatesSection">
          <h2 id="sectionTitle">
            Certificates <span id="sectionHighlight">& Training</span>
          </h2>
          <div id="certificatesGrid">
            <div id="certificateCard">
              <div id="certificateTitle">Advanced React and Modern Frontend Architectures</div>
              <p id="certificateDescription">
                Completed an intensive program focusing on React hooks, context patterns, performance optimization, and
                design systems.
              </p>
            </div>

            <div id="certificateCard">
              <div id="certificateTitle">Backend APIs with Node.js & MongoDB</div>
              <p id="certificateDescription">
                Built production-grade REST APIs with Node.js, Express, and MongoDB including authentication,
                validation, and deployment.
              </p>
            </div>

            <div id="certificateCard">
              <div id="certificateTitle">Java and Spring Boot Microservices</div>
              <p id="certificateDescription">
                Designed microservice-based backends with Spring Boot, documenting services and implementing CI/CD
                pipelines.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MainScreen
