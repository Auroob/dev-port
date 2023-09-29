import React from "react";

import { aboutData } from "../../data/aboutData";

export const About = () => {
    return (
        <div className="about">
            <div className="content">
                <div className="image">
                    <img src={aboutData.image} alt="Auroob" />
                </div>
                <h2>About Me</h2>
                <p>{aboutData.content}</p>
            </div>
        </div>
    )
}