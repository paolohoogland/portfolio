import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Intro = () => {
    const surname = "Hoogland_";
    const surnamePhonetic = "/'ho:x.lɑnt/_";
    const [showPhonetic, setShowPhonetic] = useState(false);
    const [wordWidth, setWordWidth] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const surnameRef = useRef(null);
    const phoneticRef = useRef(null);

    useEffect(() => {
        const measure = () => {
            setIsMobile(window.innerWidth <= 768);
            if (surnameRef.current && phoneticRef.current)
                setWordWidth(Math.max(surnameRef.current.offsetWidth, phoneticRef.current.offsetWidth));
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPhonetic(prev => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nameKey = showPhonetic ? 'phonetic' : 'surname';
    const nameText = showPhonetic ? surnamePhonetic : surname;

    return (
        <div className="section">
            <div className="sectionHeader">
                <h1>
                    <span className="introGreeting">Hello, I'm Paolo</span>{" "}
                    {isMobile ? (
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                key={nameKey}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                            >
                                {nameText}
                            </motion.span>
                        </AnimatePresence>
                    ) : (
                        <span style={{ position: 'relative', display: 'inline-block', width: wordWidth ?? 'auto', height: '1.2em', verticalAlign: 'bottom' }}>
                            <AnimatePresence>
                                <motion.span
                                    key={nameKey}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }}
                                >
                                    {nameText}
                                </motion.span>
                            </AnimatePresence>
                            <span ref={surnameRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none' }}>{surname}</span>
                            <span ref={phoneticRef} style={{ position: 'absolute', visibility: 'hidden', whiteSpace: 'nowrap', pointerEvents: 'none' }}>{surnamePhonetic}</span>
                        </span>
                    )}
                </h1>
            </div>
            <div className="sectionBody">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    I'm a computer science engineer always up for a challenge.
                </motion.p>
            </div>
        </div>
    );
};

export default Intro;
