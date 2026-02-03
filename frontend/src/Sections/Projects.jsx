import { portfolioData } from "../Data/PortfolioData"
import "../CSS/Projects.css"
import { ExternalLink, Github, Code2, Users, Terminal, ChevronRight } from "lucide-react"

const Projects = () => {
    const [viewMode, setViewMode] = useState("general") // 'general' or 'technical'

    // Fallback descriptions if data is missing
    const defaultGeneral = "This project is designed with the end-user in mind, focusing on intuitive navigation and seamless performance. It solves real-world problems by automating tasks and providing key insights in a user-friendly interface."

    const defaultTechnical = [
        "Built using modern component-based architecture for reusability.",
        "Implemented secure RESTful API endpoints for data handling.",
        "Optimized for performance with lazy loading and code splitting.",
        "Utilized CI/CD pipelines for automated testing and deployment."
    ]

    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-title scroll-animate">
                Featured <span className="highlight">Projects</span>
            </h2>

            {/* Toggle Control */}
            <div className="projects-controls scroll-animate delay-1">
                <div className="view-toggle">
                    <div
                        className="toggle-slider"
                        style={{
                            transform: viewMode === "general" ? "translateX(0)" : "translateX(100%)",
                            width: "50%"
                        }}
                    />
                    <button
                        className={`toggle-btn ${viewMode === "general" ? "active" : ""}`}
                        onClick={() => setViewMode("general")}
                    >
                        <Users size={18} /> General
                    </button>
                    <button
                        className={`toggle-btn ${viewMode === "technical" ? "active" : ""}`}
                        onClick={() => setViewMode("technical")}
                    >
                        <Terminal size={18} /> Technical
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {portfolioData.projects.map((project, index) => (
                    <div
                        className="project-card scroll-animate"
                        key={index}
                        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                    >
                        {/* Image Header */}
                        <div className="card-image-wrapper">
                            <img src={project.image} alt={project.name} className="project-img" />
                            <div className="card-overlay">
                                <div className="card-links">
                                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="card-link-btn" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="card-link-btn" title="View Code">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="card-content">
                            <div className="card-header">
                                <h3 className="card-title">{project.name}</h3>
                            </div>

                            <div className="tech-stack-mini">
                                {project.tech.slice(0, 4).map((t, i) => (
                                    <span key={i} className="tech-dot">{t}</span>
                                ))}
                                {project.tech.length > 4 && <span className="tech-dot">+{project.tech.length - 4}</span>}
                            </div>

                            <div className="description-container">
                                {viewMode === "general" ? (
                                    <div className="desc-content general-desc">
                                        <p>
                                            {project.generalDescription || defaultGeneral}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="desc-content technical-desc">
                                        <ul className="tech-list">
                                            {(project.technicalDescription || defaultTechnical).map((point, idx) => (
                                                <li key={idx} className="tech-item">
                                                    <ChevronRight size={14} className="code-symbol" />
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Mobile Only Actions */}
                            <div className="mobile-card-actions">
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="m-btn primary">
                                    Live Demo
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="m-btn">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
