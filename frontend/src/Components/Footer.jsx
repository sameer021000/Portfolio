import { portfolioData } from "../Data/PortfolioData"
import "../CSS/MainScreenCSS.css"

const Footer = () => {
    return (
        <footer className="footer" id="main-footer">
            <p>© 2025 {portfolioData.name}. All rights reserved.</p>
            <p>Built with ❤️ using React & Real DevIcons</p>
        </footer>
    )
}
export default Footer
