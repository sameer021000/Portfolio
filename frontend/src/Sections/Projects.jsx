import { useState } from "react"
import { portfolioData } from "../Data/PortfolioData"
import "../CSS/Projects.css"
import { ExternalLink, Github, BookOpen, Terminal as TerminalIcon, Layers } from "lucide-react"

const ProjectCard = ({ project }) => {
    const [activeTab, setActiveTab] = useState("overview") // 'overview' | 'specs'

    const defaultGeneral = "Designed for seamless user experience, this application simplifies complex tasks into intuitive workflows. It features a responsive interface and reliable performance for everyday use."

    // Fallback tech description
    const getTechPoints = (points) => {
        if (points && points.length > 0) return points
        return [
            "Architecture: Component-based Monolith",
            "State Management: Local React Hooks",
            "API: RESTful integration",
            "Styling: Responsive CSS Grid"
        ]
    }

    return (
        <div className="project-card scroll-animate">
            {/* Image Header */}
            <div className="card-image-container">
                <img src={project.image} alt={project.name} className="project-img" />
                <div className="card-actions-overlay">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="action-icon-btn" title="Live Demo">
                        <ExternalLink size={22} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="action-icon-btn" title="Source Code">
                        <Github size={22} />
                    </a>
                </div>
            </div>

            {/* Tabs Navigation */}
            <div className="card-tabs">
                <button
                    className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                    onClick={() => setActiveTab("overview")}
                >
                    <BookOpen size={16} /> Overview
                </button>
                <button
                    className={`tab-btn ${activeTab === "specs" ? "active" : ""}`}
                    onClick={() => setActiveTab("specs")}
                >
                    <TerminalIcon size={16} /> Dev Mode
                </button>
            </div>

            {/* Dynamic Content Body */}
            <div className="card-content-area">
                {activeTab === "overview" ? (
                    <div className="overview-content">
                        <h3 className="project-title">{project.name}</h3>
                        <p className="overview-text">
                            {project.generalDescription || defaultGeneral}
                        </p>
                        <div className="tech-tags-list">
                            {project.tech.slice(0, 5).map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="specs-content">
                        <div className="terminal-header">
                            <div className="dot red"></div>
                            <div className="dot yellow"></div>
                            <div className="dot green"></div>
                        </div>
                        <div className="terminal-body">
                            <div className="code-line"><span className="comment">// Technical Specs</span></div>
                            <div className="code-line"><span className="keyword">const</span> stack = [<span className="string">"{project.tech[0]}"</span>, <span className="string">"{project.tech[1]}"</span>];</div>
                            <br />
                            {getTechPoints(project.technicalDescription).map((point, idx) => (
                                <div key={idx} className="code-line">
                                    <span className="keyword">git commit</span> -m <span className="string">"{point}"</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile Footer Actions (Hidden on Desktop) */}
            <div className="mobile-footer">
                <a href={project.liveUrl} className="m-link live"><ExternalLink size={16} /> Live Demo</a>
                <a href={project.githubUrl} className="m-link git"><Github size={16} /> Code</a>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <h2 className="section-title scroll-animate">
                Featured <span className="highlight">Projects</span>
            </h2>

            <div className="projects-grid">
                {portfolioData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
