import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
    const surname = "hoogland_";
    const surnamePhonetic = "/'ho:x.lɑnt/";
    const [showPhonetic, setShowPhonetic] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPhonetic(prev => !prev);
        }, 2000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section">
            <div className="sectionHeader">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    hello, I'm paolo {showPhonetic ? surnamePhonetic : surname}
                </motion.h1>
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