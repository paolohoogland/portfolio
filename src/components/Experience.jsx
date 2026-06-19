import { useState } from 'react';
import { motion } from "framer-motion";

const Experience = () => {
      const [activeTab, setActiveTab] = useState('ALE');

    return (
        <div className="section">
            <motion.div className="sectionHeader"
            initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h2>experience_</h2>
            </motion.div>
            <motion.div className="sectionBody" id='expSectionBody'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}>
                <div className="expList">
                    <ul>
                        <button className={`expButton ${activeTab === 'ALE' ? 'active' : ''}`} onClick={() => setActiveTab('ALE')}>
                            ALE
                        </button>
                        <button className={`expButton ${activeTab === 'BU' ? 'active' : ''}`} onClick={() => setActiveTab('BU')}>
                            Bangkok University
                        </button>
                        <button className={`expButton ${activeTab === 'Archimed' ? 'active' : ''}`} onClick={() => setActiveTab('Archimed')}>
                            Archimed-GE
                        </button>
                    </ul>
                </div>
                <div className="expDetails">
                    <div className={`expTab ${activeTab === 'ALE' ? 'active' : ''}`}>
                        <div className="expHeader">
                            <h3>Backend Developer @ <span className='pp'>Alcatel-Lucent Enterprise</span></h3>
                            <span>sep 2023 - Present</span>
                        </div>
                        <div className="expBody">
                            <ul>
                                <p>
                                    Design and develop an internal performance and load-testing platform for Rainbow, Alcatel-Lucent Enterprise's cloud communications platform (messaging, voice, video). Own the tool end-to-end: architecture, development, and deployment, across 3+ years. Used by Backend, Frontend, and QA teams.
                                </p>
                                <li>Build a full-stack internal testing platform in Node.js / JavaScript to launch and monitor load and performance tests, with custom configuration, against Rainbow's REST APIs (using k6 and Grafana).</li>
                                <li>Add real-time tracking of every HTTP response and custom metric, plus data export and automated report generation.</li>
                                <li>Extend k6 with a custom Go (Golang) extension to test the XMPP protocol, enabling automated testing of real-time conversations and messaging.</li>
                                <li>Add Docker and Kubernetes support to run tests at scale and on demand</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`expTab ${activeTab === 'BU' ? 'active' : ''}`}>
                        <div className="expHeader">
                            <h3>Machine learning Engineer @ <span className='pp'>Bangkok University (BU-CROCCS)</span></h3>
                            <span>jul 2025 - sep 2025</span>
                        </div>
                        <div className="expBody">
                            <ul>
                                <li>Designed and implemented a Convolutional Neural Network (CNN) combined with a Multi-Layer Perceptron (MLP) to classify music genres from audio data</li>
                                <li>Deployed the trained model as a REST API using FastAPI</li>
                                <li>Developed a web application using .js to upload & record audio files and display real-time predictions</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`expTab ${activeTab === 'Archimed' ? 'active' : ''}`}>
                        <div className="expHeader">
                            <h3>Fullstack Developer @ <span className='pp'>Archimed-GE</span></h3>
                            <span>apr 2023 - jul 2023</span>
                        </div>
                        <div className="expBody">
                            <ul>
                                <li>Developed a 3D viewer tool to display FBX formats</li>
                                <li>Implemented an upload tool for OBJ/MTL and FBX formats, allowing storage, display and management</li>
                                <li>Developed an administrator page for managing database data</li>
                                <li>Developed a contact form for clients</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Experience;
