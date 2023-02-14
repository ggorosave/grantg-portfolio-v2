import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTabs from "../components/ProjectTabs";

// projects object 
import projects from "../utils/projectData";

export default function Project() {

    // project state
    const [currentProject, setCurrentProject] = useState('Project 1');

    const handleProjectChange = (project) => setCurrentProject(project);

    const renderProject = () => {

        if (currentProject === 'Project 1') {

            return <ProjectCard project={projects.p1} />
        }
        if (currentProject === 'Project 2') {

            return <ProjectCard project={projects.p2} />
        }
        if (currentProject === 'Project 3') {

            return <ProjectCard project={projects.p3} />
        }
        if (currentProject === 'Project 4') {

            return <ProjectCard project={projects.p4} />
        }
        if (currentProject === 'Project 5') {

            return <ProjectCard project={projects.p5} />
        }
    }

    return (
        <div className="mt-28 mx-3 flex flex-col lg:flex-row items-start">
            
            {/* Project Tabs */}
            <ProjectTabs currentProject={currentProject} handleProjectChange={handleProjectChange} />
            
            {/* Project Container */}
            {renderProject()}

        </div>
    )
};