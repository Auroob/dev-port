import React from "react";
import "./about.css";

import Resume from "../../pdf/Auroob_Ahmad_Resume.pdf";

import { aboutData } from "../../data/aboutData";
import { introductionData } from "../../data/introductionData";

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
                        <div className="about-contact">
                            <div className="about-button">
                                <a href={Resume} download="Auroob Ahmad Resume">
                                    <button>
                                        Download Resume
                                    </button>
                                </a>
                            </div>
                            <div className="about-links">
                                <a href="https://github.com/Auroob" target="blank">
                                    <img src={introductionData.github} alt="Github" />
                                </a>
                                <a href="" target="blank">
                                    <img src={introductionData.gmail} alt="Gmail" height="2.25rem"/>
                                </a>
                                <a href="https://www.linkedin.com/in/auroob/" target="blank">
                                    <img src={introductionData.linkedin} alt="LinkedIn" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}