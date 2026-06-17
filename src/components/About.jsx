import { motion } from "framer-motion";
import myPic from '../assets/img/yo.JPG';

const About = () => {
    return (
        <div className="section">
            <motion.div className="sectionHeader"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h2>about_</h2>
            </motion.div>
            <motion.div className="sectionBody"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div id="info">
                    <p>I'm currently a Software Developer at <a href="https://www.al-enterprise.com/fr-fr">Alcatel-Lucent Enterprise</a>, working in the Backend team. I'm developing a load and performance testing interface.</p>
                    <p>I hold a Bachelor's degree in Computer Science with a specialization in Application Development: design, development, and testing, from <a href="https://iutrs.unistra.fr">IUT Robert Schuman</a> in Strasbourg. I am currently pursuing an engineering degree at the <a href="https://www.cnam-grandest.fr">National Conservatory of Arts and Crafts (CNAM)</a>, Strasbourg.</p>
                </div>
                <div id="myPic">
                    <img src={myPic} alt="Paolo Hoogland" />
                </div>
            </motion.div>
        </div>
    )
}

export default About;