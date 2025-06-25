import React, { useEffect, useState } from 'react';


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
                <h1>hello, I'm paolo {showPhonetic ? surnamePhonetic : surname}</h1>
            </div>
            <div className="sectionBody">
                <p>I'm a computer science engineer always up for a challenge.</p>
            </div>
        </div>
    )
};

export default Intro;