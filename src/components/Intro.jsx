import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Intro = () => {
    const surname = "Hoogland_";
    const surnamePhonetic = "/'ho:x.lɑnt/_";
    const [showPhonetic, setShowPhonetic] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPhonetic(prev => !prev);
        }, 4000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section">
            <div className="sectionHeader">
                <h1>
                    Hello, I'm Paolo{" "}
                    <AnimatePresence mode='wait'>
                        <motion.span
                            key={showPhonetic ? 'phonetic' : 'surname'}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{ display: 'inline-block' }}
                        >
                            {showPhonetic ? surnamePhonetic : surname}
                        </motion.span>
                    </AnimatePresence>
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
    )
};

export default Intro;