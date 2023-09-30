import React from "react";

import "./project-description.css";

export const ProjectDescription = ({ id, image, title, color, description, job }) => {
    console.log("title, color",title, color);
    return (
        <div className="project-description">
            <div key={id} className="project-content">
                <div className="project-image">
                    <img src={image} alt="project" />
                </div>
                <div className="project-about">
                    <h4 style={{color: color}}>{title}</h4>
                    <p style={{color: 'var(--text-color-grey)'}}><i>{description}</i></p>
                    <p><b>Skills Used: </b>{job}</p>
                </div>
            </div>
        </div>
    );
}