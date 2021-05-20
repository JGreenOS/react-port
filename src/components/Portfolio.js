import React from 'react';
import ProjectDetails from '../components/Card';
import './box.css';

const Portfolio = () => {
    return (
        <div>
            <h2>Portfolio</h2>
                <div className="grid">
            <ProjectDetails/>
            </div>
        </div>
    )
}

export default Portfolio
