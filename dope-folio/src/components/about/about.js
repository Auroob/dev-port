import React from "react";
import "./about.css";

import { aboutData } from "../../data/aboutData";

export const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <div className="about-image">
                    <img src={aboutData.image} alt="Auroob" />
                </div>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>{aboutData.content}</p>
                </div>
            </div>
        </div>
    )
}