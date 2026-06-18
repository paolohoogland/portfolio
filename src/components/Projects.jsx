import { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import githubIcon from '../assets/img/github.png';
import posImg from '../assets/img/pos.png';

const featuredProjects = [
    {
        title: "Restaurant POS System",
        description: "Full-stack restaurant POS (Angular + NestJS + Prisma/PostgreSQL) in an Nx monorepo. It manages dishes, menus, ingredient recipes with a substitution system, and live stock tracking. Made with a rigorous testing culture including mutation and property-based testing.",
        tech: ["NestJS", "Angular", "Docker", "Gitlab CI/CD", "Prisma", "PostgreSQL", "TDD"],
        github: "https://gitlab.com/cnam-fip-2a-tests/projet-test-ci-pos",
        image: posImg,
    },
    {
        title: "Sharp - Finger Detection",
        description: "Real-time finger-counting web app powered by a custom YOLO model, with a full MLOps pipeline (automated training, mAP-gated model promotion, MLflow tracking, and Dockerized CI/CD deployment).",
        tech: ["Python", "YOLOv8", "OpenCV", "MLflow", "Docker", "CI/CD"],
        github: "https://gitlab.com/cnam_tom_prieto/sharp",
    },
];

const otherProjects = [
    {
        title: "SMSS-Tro-Cool",
        description: "An SSMS-style client driving a real Dockerized SQL Server over TDS, built on a strict SOLID/clean-architecture codebase.",
        tech: ["React 19", "TypeScript", "Express", "SQL Server", "Docker"],
        github: "https://gitlab.com/cnam-bdd/smss-tro-cool",
    },
    {
        title: "ESP32-C6 Robot",
        description: "A MicroPython-based robot built on the ESP32-C6, controlled through a lightweight web interface for real-time movement and sensor feedback.",
        tech: ["MicroPython", "ESP32-C6", "HTML", "CSS"],
        github: "https://github.com/paolohoogland/esp32c6_robot_zilina",
    },
];

const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

const Projects = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const touchStartX = useRef(null);

    const paginate = (dir) => {
        setDirection(dir);
        setIndex((prev) => (prev + dir + featuredProjects.length) % featuredProjects.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
        touchStartX.current = null;
    };

    const project = featuredProjects[index];

    return (
        <div className="section">
            <motion.div className="sectionHeader"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h2>projects_</h2>
            </motion.div>

            <motion.div className="carouselOuter"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <button className="carouselBtn prev" onClick={() => paginate(-1)}>&#8592;</button>
                <div className="carouselSlider" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="carouselCard"
                            style={project.image ? {
                                backgroundImage: `linear-gradient(rgba(33, 22, 58, 0.88), rgba(33, 22, 58, 0.88)), url(${project.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            } : undefined}
                        >
                            <div className="carouselContent">
                                <h3>{project.title}</h3>
                                <p className="carouselDescription">{project.description}</p>
                                <div className="carouselFooter">
                                    <ul className="projectTech">
                                        {project.tech.map((t) => <li key={t}>{t}</li>)}
                                    </ul>
                                    <a href={project.github} target="_blank" rel="noreferrer">
                                        <img src={githubIcon} alt="repository" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <button className="carouselBtn next" onClick={() => paginate(1)}>&#8594;</button>
                <div className="swipeHint">&#8592; swipe &#8594;</div>
                <div className="carouselDots">
                    {featuredProjects.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === index ? 'active' : ''}`}
                            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div className="projectsGrid"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                {otherProjects.map((p) => (
                    <div className="projectCard" key={p.title}>
                        <div className="projectHeader">
                            <h3>{p.title}</h3>
                            <a href={p.github} target="_blank" rel="noreferrer">
                                <img src={githubIcon} alt="repository" />
                            </a>
                        </div>
                        <p>{p.description}</p>
                        <ul className="projectTech">
                            {p.tech.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
