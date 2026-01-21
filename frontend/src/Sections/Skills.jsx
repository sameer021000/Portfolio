import { portfolioData, skillCategories, categoryIcons } from "../Data/PortfolioData"
import "../CSS/Skills.css"

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <h2 className="section-title scroll-animate">
                Technical <span className="highlight">Skills</span>
            </h2>

            <div className="skills-categories-container">
                {Object.entries(skillCategories).map(([category, skillNames], idx) => (
                    <div key={category} className={`skill-category-group scroll-animate delay-${(idx % 3) + 1}`}>
                        <h3 className="skill-category-title">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {category} {categoryIcons[category]}
                            </span>
                        </h3>
                        <div className="skills-grid">
                            {portfolioData.technicalSkills
                                .filter((skill) => skillNames.includes(skill.name))
                                .map((skill) => (
                                    <div
                                        className={`skill-item-card card ${skill.name.includes("React")
                                            ? "skill-react"
                                            : skill.name.includes("Java") && !skill.name.includes("JavaScript")
                                                ? "skill-java"
                                                : skill.name.includes("JavaScript")
                                                    ? "skill-js"
                                                    : skill.name.includes("Git")
                                                        ? "skill-git"
                                                        : ["HTML", "CSS", "UI/UX", "XML"].includes(skill.name)
                                                            ? "skill-ui"
                                                            : ["Node.Js", "Spring-Boot"].includes(skill.name)
                                                                ? "skill-backend"
                                                                : ["MySQL", "MongoDB"].includes(skill.name)
                                                                    ? "skill-db"
                                                                    : ""
                                            }`}
                                        key={skill.name}
                                    >
                                        <img src={skill.logo || "/placeholder.svg"} alt={skill.name} className="skill-logo" />
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Skills
