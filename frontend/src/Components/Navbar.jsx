import { useState } from "react"
import "../CSS/Navbar.css"

const Navbar = ({ pageLoaded, isScrolled, theme, toggleTheme }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleNavClick = () => {
        setIsMobileMenuOpen(false)
    }

    const handleMenuBackdropClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <nav
                id="navbar"
                className={`navbar ${pageLoaded ? "page-enter-nav" : "page-enter-init"} ${isScrolled ? "scrolled" : ""}`}
            >
                <div className="nav-content">
                    <button
                        className="hamburger-menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        id="hamburger-btn"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>

                    <h2 className="logo" id="site-logo">
                        Portfolio
                    </h2>

                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#experience">Experience</a></li>
                    </ul>

                    <button onClick={toggleTheme} className="theme-toggle" id="theme-btn" aria-label="Toggle theme">
                        <div className="theme-icon-wrapper">
                            {theme === "light" ? (
                                <svg className="theme-icon moon-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                </svg>
                            ) : (
                                <svg className="theme-icon sun-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5"></circle>
                                    <line x1="12" y1="1" x2="12" y2="3"></line>
                                    <line x1="12" y1="21" x2="12" y2="23"></line>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                    <line x1="1" y1="12" x2="3" y2="12"></line>
                                    <line x1="21" y1="12" x2="23" y2="12"></line>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                </svg>
                            )}
                        </div>
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className="mobile-menu-backdrop" onClick={handleMenuBackdropClick} id="menu-backdrop"></div>
            )}

            <div className={`mobile-side-menu ${isMobileMenuOpen ? "active" : ""}`} id="mobile-menu">
                <ul className="mobile-nav-links">
                    <li><a href="#home" onClick={handleNavClick}>Home</a></li>
                    <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
                    <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
                    <li><a href="#education" onClick={handleNavClick}>Education</a></li>
                    <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
