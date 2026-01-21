import { portfolioData } from "../Data/PortfolioData"
import "../CSS/Achievements.css"

const Achievements = () => {
    return (
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
    )
}
export default Achievements
