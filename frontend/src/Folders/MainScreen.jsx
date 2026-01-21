import { useState, useEffect } from "react"
import "../CSS/Global.css"
import "../CSS/Animations.css"

// Components & Sections
import Navbar from "../Components/Navbar"
import Hero from "../Sections/Hero"
import Skills from "../Sections/Skills"
import Projects from "../Sections/Projects"
import Experience from "../Sections/Experience"
import Education from "../Sections/Education"
import Achievements from "../Sections/Achievements"
import Certificates from "../Sections/Certificates"
import Footer from "../Components/Footer"

const MainScreen = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [pageLoaded, setPageLoaded] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  // Page Entrance Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true)
    }, 700)
    return () => clearTimeout(timer)
  }, [])

  // Cursor Glow Effect
  useEffect(() => {
    if (window.innerWidth <= 1024) return

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Scroll Handler & Top Progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 400)

      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observer.observe(el))

    return () => elements.forEach((el) => observer.unobserve(el))
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div id="main-container" className="main-container">
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>
      <div className="scroll-progress-container">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar
        pageLoaded={pageLoaded}
        isScrolled={isScrolled}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Hero pageLoaded={pageLoaded} />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Achievements />

      <Certificates />

      <Footer />

      <button
        id="scroll-to-top"
        className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <div className="scroll-btn-content">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 19V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V19h2z" />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default MainScreen
