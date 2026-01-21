import { portfolioData } from "../Data/PortfolioData"
import "../CSS/MainScreenCSS.css"

const Projects = () => {
    return (
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
    )
}
export default Projects
