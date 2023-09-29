import React from "react";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { ProjectDescription } from "./project-description/project-description";

export const Projects = () => {
    return (
        <div className="intro">
            <div className="intro-description">
                <h2>Projects I have worked on</h2>
                {projectsData.map((project) => {
                    return (
                        <ProjectDescription
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            job={project.job}
                        />
                    );
                })}
            </div>
        </div>
    );
};
