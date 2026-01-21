import { portfolioData } from "../Data/PortfolioData"
import "../CSS/MainScreenCSS.css"

const Experience = () => {
    return (
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
    )
}
export default Experience
