import { portfolioData } from "../data/portfolioData"
import "../CSS/Projects.css"
import { ExternalLink, Github, Code2, CheckCircle2 } from "lucide-react"

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-title scroll-animate">
                Featured <span className="highlight">Projects</span>
            </h2>
            <div className="projects-stack-container" id="projects-container">
                {portfolioData.projects.map((project, index) => (
                    <div
                        className="project-card-stack sticky-card scroll-animate"
                        key={index}
                        style={{
                            '--index': index
                        }}
                    >
                        <div className="project-content-wrapper">
                            {/* Left: Project Preview */}
                            <div className="project-visual">
                                <div
                                    className="project-image-container"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className="project-overlay-actions">
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="action-btn live-btn">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                                            <Github size={18} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Project Info */}
                            <div className="project-details">
                                <div className="project-header">
                                    <h3 className="project-title">{project.name}</h3>
                                    <div className="tech-stack-row">
                                        <Code2 size={16} className="tech-icon" />
                                        <div className="tech-tags">
                                            {project.tech.map((t) => (
                                                <span key={t} className="tech-pill">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <ul className="project-features">
                                    {project.description.map((point, i) => (
                                        <li key={i}>
                                            <CheckCircle2 size={16} className="feature-icon" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mobile-actions">
                                    <a href={project.liveUrl} className="mobile-btn">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.githubUrl} className="mobile-btn">
                                        <Github size={16} /> GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
