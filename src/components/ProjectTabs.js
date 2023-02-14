import React from "react";

export default function ProjectTabs({ currentProject, handleProjectChange }) {

    return (
        <ul className="list-none flex lg:flex-col">

            <li>
                <a
                    className={
                        currentProject === "Project 1" 
                        ? "bg-secondary text-quaternary ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                        : "bg-tertiary text-prim-light ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                    }
                    href="#project1"
                    onClick={() => handleProjectChange('Project 1')}
                >
                    Project 1
                </a>
            </li>
            <li>
                <a
                    className={
                        currentProject === "Project 2" 
                        ? "bg-secondary text-quaternary ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                        : "bg-tertiary text-prim-light ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                    }
                    href="#project2"
                    onClick={() => handleProjectChange('Project 2')}
                >
                    Project 2
                </a>
            </li>
            <li>
                <a
                    className={
                        currentProject === "Project 3" 
                        ? "bg-secondary text-quaternary ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                        : "bg-tertiary text-prim-light ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                    }
                    href="#project3"
                    onClick={() => handleProjectChange('Project 3')}
                >
                    Project 3
                </a>
            </li>
            <li>
                <a
                    className={
                        currentProject === "Project 4" 
                        ? "bg-secondary text-quaternary ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                        : "bg-tertiary text-prim-light ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                    }
                    href="#project4"
                    onClick={() => handleProjectChange('Project 4')}
                >
                    Project 4
                </a>
            </li>
            <li>
                <a
                    className={
                        currentProject === "Project 5" 
                        ? "bg-secondary text-quaternary ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                        : "bg-tertiary text-prim-light ssp text-md text-center mr-0.5 lg:mr-0 lg:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 lg:rounded-tr-none  lg:rounded-l-lg"
                    }
                    href="#project5"
                    onClick={() => handleProjectChange('Project 5')}
                >
                    Project 5
                </a>
            </li>
        </ul>
    )
}