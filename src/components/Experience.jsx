import { useState } from 'react';

const Experience = () => {
      const [activeTab, setActiveTab] = useState('ALE');

    return (
        <div className="section">
            <div className="sectionHeader">
                <h2>experience_</h2>
            </div>
            <div className="sectionBody">
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
                    {activeTab === 'ALE' && (
                        <div className="expTab">
                            <div className="expHeader">
                                <h3>Backend Developer @ Alcatel-Lucent Enterprise</h3>
                                <span>sep 2023 - Present</span>
                            </div>
                            <div className="expBody">
                                <ul>
                                    <li>Develop a tool to perform automatic load and chaos tests on the REST APIs developed for the Rainbow platform</li>
                                    <li>Test the functionality of XMPP protocol implementations</li>
                                    <li>Program a new Golang extension for the k6 load-testing tool</li>
                                    <li>Automate performance tests and test report production</li>
                                </ul>
                            </div>
                        </div>
                    )}
                    {activeTab === 'BU' && (
                        <div className="expTab">
                            <div className="expHeader">
                                <h3>Machine learning Engineer @ Bangkok University</h3>
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
                    )}
                    {activeTab === 'Archimed' && (
                        <div className="expTab">
                            <div className="expHeader">
                                <h3>Fullstack Developer @ Archimed-GE</h3>
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
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experience;