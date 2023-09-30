import React from "react";
import "./about.css";

import Resume from "../../pdf/Auroob_Ahmad_Resume.pdf";

import { aboutData } from "../../data/aboutData";

export const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h2>About Me</h2>
                <div className="about-description">
                    <div className="about-image">
                        <img src={aboutData.image} alt="Auroob" />
                    </div>
                    <div className="about-text">
                        <p style={{color: 'var(--text-color-white)'}}>{aboutData.content}</p>
                        <div className="about-button">
                            <a href={Resume} download="Auroob Ahmad Resume">
                                <button>
                                    Download Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}