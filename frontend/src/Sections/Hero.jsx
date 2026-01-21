import { useState, useEffect } from "react"
import Lottie from "lottie-react"
import devAnimation from "../Assets/Male_Avatar.json"
import { portfolioData } from "../Data/PortfolioData"
import "../CSS/MainScreenCSS.css" // Keep visual consistency

const Hero = ({ pageLoaded }) => {
    const [displayText, setDisplayText] = useState({ part1: "", part2: "" })
    const [isTypingComplete, setIsTypingComplete] = useState(false)
    const [showImage, setShowImage] = useState(false)

    const name = portfolioData.name

    // Avatar Flip Effect
    useEffect(() => {
        const flipInterval = setInterval(() => {
            setShowImage((prev) => !prev)
        }, 5000)
        return () => clearInterval(flipInterval)
    }, [])

    // Typing Effect (Delayed until page load)
    useEffect(() => {
        if (!pageLoaded) return

        const fullTextPart1 = "Hi, I'm "
        const fullTextPart2 = name || "Sameer Shaik"
        let charIndex = 0

        const typingInterval = setInterval(() => {
            if (charIndex <= fullTextPart1.length) {
                setDisplayText((prev) => ({ ...prev, part1: fullTextPart1.substring(0, charIndex) }))
            } else if (charIndex <= fullTextPart1.length + fullTextPart2.length) {
                const p2Index = charIndex - fullTextPart1.length
                setDisplayText((prev) => ({ ...prev, part2: fullTextPart2.substring(0, p2Index) }))
            } else {
                clearInterval(typingInterval)
                setIsTypingComplete(true)
            }
            charIndex++
        }, 75)

        return () => clearInterval(typingInterval)
    }, [name, pageLoaded])

    const handleAvatarClick = () => {
        setShowImage((prev) => !prev)
    }

    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <div className={`hero-text ${pageLoaded ? "page-enter-hero" : "page-enter-init"}`}>
                    <h1 className="hero-title" id="full-name">
                        {displayText.part1}
                        <span className="highlight">{displayText.part2}</span>
                        {!isTypingComplete && <span className="typing-cursor">|</span>}
                    </h1>
                    <p className="hero-subtitle animate-up delay-1">
                        Full Stack Developer passionate about building scalable web applications and intuitive user experiences.
                    </p>
                    <div className="contact-info animate-up delay-2">
                        <a className="contact-item" id="mail-id" href={`mailto:${portfolioData.email}`}>
                            📧 {portfolioData.email}
                        </a>
                        <a className="contact-item" id="phone-number" href={`tel:${portfolioData.phone}`}>
                            📞 {portfolioData.phone}
                        </a>
                    </div>
                    <div className="social-links animate-up delay-3">
                        <a href={portfolioData.linkedin} className="social-btn linkedin-btn" id="linkedin-link" title="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href={portfolioData.github} className="social-btn github-btn" id="github-link" title="GitHub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div
                    onClick={handleAvatarClick}
                    className={`hero-avatar-container animate-scale ${pageLoaded ? "page-enter-avatar" : "page-enter-init"
                        } ${showImage ? "flipped" : ""}`}
                >
                    <div className="avatar-glow"></div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <Lottie animationData={devAnimation} loop className="hero-avatar" />
                            </div>
                            <div className="flip-card-back">
                                <img src="/My_profile_pic.jpg" alt="Sameer Shaik" className="hero-avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
