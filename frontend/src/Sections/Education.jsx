import { portfolioData } from "../Data/PortfolioData"
import "../CSS/Education.css"

const Education = () => {
    return (
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
    )
}
export default Education
