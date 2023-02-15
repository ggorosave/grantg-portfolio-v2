import React from "react";

export default function ProjectCard({ project }) {

    return (

        <section className="bg-secondary p-5 flex grow h-fit w-full rounded-b-lg md:w-auto md:rounded-r-lg md:rounded-bl-lg">

                {/* Project Card */}
                <div className="bg-quaternary grow rounded-lg flex flex-col lg:flex-row">

                    {/* Project Image */}
                    <figure>
                        <img
                            className="w-72 my-5 mx-auto rounded-lg lg:w-full lg:ml-4"
                            src={project.image.src}
                            alt={project.image.alt}
                        />
                    </figure>

                    {/* Title and Description Container */}
                    <div className="flex flex-col flex-grow h-full justify-between mx-4 my-3 text-primary lg:ml-10 lg:mt-5">

                        {/* text container */}
                        <div>

                            {/* Title */}
                            <h3 className="text-lg font-bold">{project.title}</h3>

                            {/* Description */}
                            <p className="mt-3">{project.description}</p>

                            {/* Technologies Used */}
                            <div className="mt-5">

                                {/* Header */}
                                <h4 className="text-md font-bold">Technologies Used:</h4>

                                {/* Tech List */}
                                <p className="mt-3">{project.technologies}</p>

                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex mt-5 justify-between lg:justify-end lg:mb-8">

                            {/* GitHub Repo */}
                            <a
                                href={project.repo}
                                rel="noreferrer"
                                target="_blank"
                                className="block text-primary border-primary border-2 px-2 py-1 rounded-3xl lg:mr-2 hover:bg-primary hover:text-quaternary hover:border-2 hover:border-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:scale-90 active:bg-tertiary"
                            >
                                <i className="fa-brands fa-github mr-2 text-lg"></i>
                                GitHub
                            </a>

                            {/* Webpage */}
                            <a
                                href={project.app}
                                rel="noreferrer"
                                target="_blank"
                                className="block text-primary border-primary border-2 px-2 py-1 rounded-3xl lg:mr-1 hover:bg-primary hover:text-quaternary hover:border-2 hover:border-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:scale-90 active:bg-tertiary"
                            >
                                <i className="fa-solid fa-up-right-from-square mr-2 text-lg"></i>
                                Webpage
                            </a>

                        </div>

                    </div>

                </div>
            </section>
    )

};