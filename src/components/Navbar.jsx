import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import githubIcon from '../assets/img/github.png';
import gitlabIcon from '../assets/img/gitlab.png';
import linkedinIcon from '../assets/img/linkedin.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <button className="hamburger" onClick={() => setIsOpen(o => !o)} aria-label="Menu">
                <span />
                <span />
                <span />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="nav-mobile"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}>
                        <a href="#home" onClick={close}>Home</a>
                        <a href="#about" onClick={close}>About</a>
                        <a href="#experience" onClick={close}>Experience</a>
                        <a href="#projects" onClick={close}>Projects</a>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="nav-socials">
                <a href="https://github.com/paolohoogland" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a href="https://gitlab.com/paolohoogland" target="_blank" rel="noreferrer">
                    <img src={gitlabIcon} alt="GitLab" />
                </a>
                <a href="https://www.linkedin.com/in/paolohoogland/" target="_blank" rel="noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="mailto:paolohoogland@gmail.com" aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <polyline points="2,4 12,13 22,4"/>
                    </svg>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
