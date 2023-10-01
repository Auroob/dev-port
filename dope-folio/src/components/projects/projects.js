import React from "react";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { ProjectDescription } from "./project-description/project-description";

export const Projects = () => {
    return (
        <div className="project">
            <div className="project-list">
                <h2>Projects I have worked on</h2>
                <h6>Here I have a list of the projects I have worked on personally and with team collaboration during my career. My personal projects are available on my <a href="https://github.com/Auroob?tab=repositories" target="blank">github</a>.</h6>
                <div className="project-names">
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
        </div>
    );
};
