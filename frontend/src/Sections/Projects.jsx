import { useState } from "react"
import { portfolioData } from "../Data/PortfolioData"
import "../CSS/Projects.css"
import { ExternalLink, Github, BookOpen, Terminal as TerminalIcon, Download, Smartphone, ChevronLeft, ChevronRight, X } from "lucide-react"

const ProjectCard = ({ project }) => {
    const [activeTab, setActiveTab] = useState("overview") // 'overview' | 'specs'
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

    const hasMultipleImages = project.images && project.images.length > 1
    // Handle both old (string) and new (object) image structures
    const getImageSrc = (img) => (typeof img === 'string' ? img : img.src)
    const getImageCaption = (img) => (typeof img === 'string' ? project.name : img.caption)

    const currentImageObj = project.images ? project.images[currentImageIndex] : project.image
    const currentImageSrc = getImageSrc(currentImageObj)

    const [showModal, setShowModal] = useState(false)

    const nextImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
    }

    const prevImage = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
    }

    const openModal = () => setShowModal(true)
    const closeModal = (e) => {
        e.stopPropagation()
        setShowModal(false)
    }

    return (
        <>
            <div className="project-card scroll-animate">
                {/* Image Header with Slider */}
                <div className="card-image-container" onClick={openModal}>
                    {project.badge && (
                        <div className="project-badge">
                            <Smartphone size={14} />
                            <span>{project.badge}</span>
                        </div>
                    )}

                    <img
                        src={currentImageSrc}
                        alt={`${project.name} - View ${currentImageIndex + 1}`}
                        className="project-img"
                    />

                    {hasMultipleImages && (
                        <>
                            <button className="slider-btn prev" onClick={prevImage}>
                                <ChevronLeft size={20} />
                            </button>
                            <button className="slider-btn next" onClick={nextImage}>
                                <ChevronRight size={20} />
                            </button>
                            <div className="slider-dots">
                                {project.images.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`slider-dot ${idx === currentImageIndex ? "active" : ""}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentImageIndex(idx);
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    <div className="card-actions-overlay">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="action-icon-btn" title="Live Demo" onClick={(e) => e.stopPropagation()}>
                            <ExternalLink size={22} />
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="action-icon-btn" title="Source Code" onClick={(e) => e.stopPropagation()}>
                            <Github size={22} />
                        </a>
                        {project.apkUrl && (
                            <a href={project.apkUrl} target="_blank" rel="noreferrer" className="action-icon-btn download-btn" title="Download APK" onClick={(e) => e.stopPropagation()}>
                                <Download size={22} />
                            </a>
                        )}
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
                                <div className="code-line"><span className="comment">{"// Technical Specs"}</span></div>
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
                    {project.apkUrl && (
                        <a href={project.apkUrl} className="m-link download"><Download size={16} /> APK</a>
                    )}
                </div>
            </div>

            {/* Image Modal */}
            {showModal && (
                <div className="image-modal-overlay" onClick={closeModal}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={closeModal}>
                            <X size={20} />
                        </button>
                        <img src={currentImageSrc} alt="Full View" className="modal-image" />
                        <div className="modal-caption">
                            {getImageCaption(currentImageObj)}
                        </div>
                    </div>
                </div>
            )}
        </>
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
