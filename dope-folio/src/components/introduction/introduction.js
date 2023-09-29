import React from "react";
import "./introduction.css";
import { introductionData } from "../../data/introductionData";

export const Introduction = () => {
    return (
        <div className="intro">
            <div className="intro-description">
                <h5>Hi There! 👋🏼 I’m</h5>
                <h1>{introductionData.name}</h1>
                <h5>Software Engineer</h5>
            </div>
        </div>
    );
};
