import React from "react";
import { projectsData } from "../../../data/projectsData";

export const ProjectDescription = ({ id, image, title, description, job }) => {
    return (
        <div className="intro">
            <div key={id} className="intro-description">
                <div className="image">
                    <img src={image} alt="project" />
                </div>
                <div className="content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>Skills Used: {job}</p>
                </div>
            </div>
        </div>
    );
}