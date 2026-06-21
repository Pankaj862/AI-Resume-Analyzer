import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <main className="spinner-container">
            <div className="spinner">
                <div className="spinner__circle"></div>
            </div>
        </main>
    );
};

export default Spinner;
