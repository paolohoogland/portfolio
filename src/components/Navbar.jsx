import githubIcon from '../assets/img/github.png';
import linkedinIcon from '../assets/img/linkedin.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <div className="nav-socials">
                <a href="https://github.com/paolohoogland">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/paolohoogland/">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;