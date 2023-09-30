import React from "react";
import "./introduction.css";

import { introductionData } from "../../data/introductionData";

export const Introduction = () => {
    return (
        <div className="intro">
            <div className="intro-content">
                <h5>Hi There! 👋🏼 I’m</h5>
                <h1>{introductionData.name}</h1>
                <h5>Software Engineer</h5>
                <div className="intro-social">
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
    );
};
