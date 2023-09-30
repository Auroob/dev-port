import React from "react";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { ProjectDescription } from "./project-description/project-description";

export const Projects = () => {
    return (
        <div className="project">
            <div className="project-list">
                <h2>Projects I have worked on</h2>
                {projectsData.map((project) => {
                    return (
                        <div className="project-box">
                            <ProjectDescription
                                key={project.id}
                                image={project.image}
                                title={project.title}
                                color={project.color}
                                description={project.description}
                                job={project.job}
                        />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
