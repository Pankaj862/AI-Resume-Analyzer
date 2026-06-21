import React, { useState, useEffect } from 'react';
import './FullPageLoader.scss';

const messages = [
    "Analyzing your profile...",
    "Matching skills to job requirements...",
    "Generating interview strategy..."
];

const FullPageLoader = () => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="full-page-loader">
            <div className="full-page-loader__content">
                <div className="full-page-loader__spinner">
                    <div className="full-page-loader__circle"></div>
                </div>
                <div className="full-page-loader__message-container">
                    {messages.map((message, index) => (
                        <h2
                            key={index}
                            className={`full-page-loader__message ${
                                index === messageIndex ? 'active' : ''
                            }`}
                        >
                            {message}
                        </h2>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default FullPageLoader;
