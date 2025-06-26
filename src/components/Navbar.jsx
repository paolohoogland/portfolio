const Navbar = () => {
    return (
        <nav>
            <div>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
            </div>
            <span></span>
            <div>
                <a href="https://github.com/paolohoogland">
                    <img src="../src/assets/img/github.png" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/paolohoogland/">
                    <img src="../src/assets/img/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;