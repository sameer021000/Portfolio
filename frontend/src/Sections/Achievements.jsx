import { portfolioData } from "../data/portfolioData"
import "../CSS/Achievements.css"
import { Trophy, Users, Award, Briefcase } from "lucide-react"

const Achievements = () => {
    return (
        <section className="section achievements-section" id="achievements">
            <h2 className="section-title scroll-animate">
                Achievements & <span className="highlight">Responsibilities</span>
            </h2>

            <div className="holo-grid">
                {/* Achievements Column */}
                <div className="holo-column scroll-animate">
                    <h3 className="holo-header">
                        <Trophy className="holo-icon-lg" /> Trophies & Awards
                    </h3>
                    <div className="holo-cards-container">
                        {portfolioData.achievements.map((item, i) => (
                            <div className="holo-card achievement-card" key={`ach-${i}`}>
                                <div className="holo-card-glow"></div>
                                <div className="holo-card-content">
                                    <div className="card-icon-wrapper">
                                        <Award className="card-icon" />
                                    </div>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="holo-divider"></div>

                {/* Responsibilities Column */}
                <div className="holo-column scroll-animate delay-2">
                    <h3 className="holo-header">
                        <Users className="holo-icon-lg" /> Key Responsibilities
                    </h3>
                    <div className="holo-cards-container">
                        {portfolioData.responsibilities.map((item, i) => (
                            <div className="holo-card responsibility-card" key={`res-${i}`}>
                                <div className="holo-card-glow"></div>
                                <div className="holo-card-content">
                                    <div className="card-icon-wrapper">
                                        <Briefcase className="card-icon" />
                                    </div>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
