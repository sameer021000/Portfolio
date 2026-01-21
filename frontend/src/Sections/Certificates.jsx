import { useState, useEffect } from "react"
import { portfolioData } from "../Data/PortfolioData"
import "../CSS/Certificates.css"

const Certificates = () => {
    const [isCertHover, setIsCertHover] = useState(false)

    useEffect(() => {
        const container = document.getElementById("certificates-grid")
        if (!container) return

        const cards = container.querySelectorAll(".cert-card")
        if (!cards.length) return

        let currentIndex = 0
        let intervalId

        const scrollToCard = () => {
            if (isCertHover) return

            currentIndex = (currentIndex + 1) % cards.length

            const targetCard = cards[currentIndex]
            container.scrollTo({
                left: targetCard.offsetLeft - 12,
                behavior: "smooth",
            })
        }

        intervalId = setInterval(scrollToCard, 1500)
        return () => clearInterval(intervalId)
    }, [isCertHover])

    return (
        <section id="certificates" className="section certificates-section">
            <h2 className="section-title scroll-animate">Certifications</h2>
            <div
                className="cert-grid horizontal-scroll scroll-animate"
                id="certificates-grid"
                onMouseEnter={() => setIsCertHover(true)}
                onMouseLeave={() => setIsCertHover(false)}
                onTouchStart={() => setIsCertHover(true)}
                onTouchEnd={() => setIsCertHover(false)}
            >
                {portfolioData.certificates.map((cert, i) => (
                    <div className="cert-card card" key={i}>
                        <div className={`cert-icon-box box-${i % 3}`}>📜</div>
                        <div className="cert-content">
                            <h4>{cert.title}</h4>
                            <p>{cert.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Certificates
