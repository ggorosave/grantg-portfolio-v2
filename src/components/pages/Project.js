import React from "react";

export default function Project() {

    return (
        <div className="mt-28 mx-3 flex flex-col md:flex-row items-start">
            <ul className="list-none flex md:flex-col">

                {/* Project Tabs */}
                <li>
                    <button
                        className="bg-secondary text-quaternary ssp text-md text-center mr-0.5 md:mr-0 md:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 md:rounded-tr-none  md:rounded-l-lg"
                        href="#project1"
                        type="button"
                    >
                        Project 1
                    </button>
                </li>
                <li>
                    <button
                        className="bg-tertiary text-prim-light ssp text-md text-center mr-0.5 md:mr-0 md:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 md:rounded-tr-none  md:rounded-l-lg"
                        href="#project2"
                        type="button"
                    >
                        Project 2
                    </button>
                </li>
                <li>
                    <button
                        className="bg-tertiary text-prim-light ssp text-md text-center mr-0.5 md:mr-0 md:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 md:rounded-tr-none  md:rounded-l-lg"
                        href="#project2"
                        type="button"
                    >
                        Project 3
                    </button>
                </li>
                <li>
                    <button
                        className="bg-tertiary text-prim-light ssp text-md text-center mr-0.5 md:mr-0 md:mb-0.5 md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 md:rounded-tr-none  md:rounded-l-lg"
                        href="#project2"
                        type="button"
                    >
                        Project 4
                    </button>
                </li>
                <li>
                    <button
                        className="bg-tertiary text-prim-light ssp text-md text-center md:text-xl font-semibold align-middle block px-2 py-1 rounded-t-lg md:px-3 md:py-2 md:rounded-tr-none  md:rounded-l-lg"
                        href="#project2"
                        type="button"
                    >
                        Project 5
                    </button>
                </li>
            </ul>

            {/* Project Container */}
            <section className="bg-secondary p-5 flex grow h-fit w-full rounded-b-lg md:w-auto md:rounded-r-lg md:rounded-bl-lg">

                {/* Project Card */}
                <div className="bg-quaternary grow rounded-lg flex flex-col">

                    {/* Project Image */}
                    <figure>
                        <img
                            className="w-72 my-5 mx-auto rounded-lg"
                            src="/images/manage-transactions.JPG"
                            alt="web application that displays budget tables"
                        />
                    </figure>

                    {/* Title and Description Container */}
                    <div className="mx-4 my-3 text-primary">

                        {/* Title */}
                        <h3 className="text-lg font-bold">No Budge Budget Tracker</h3>

                        {/* Description */}
                        <p className="mt-3">No Budge is full stack application that takes in user data and helps them keep track of their monthly income and expenses. I worked on this site with two others and we utilized Handlebars, Express, and Express-session to build it.</p>

                        {/* Technologies Used */}
                        <div className="mt-5">

                            {/* Header */}
                            <h4 className="text-md font-bold">Technologies Used:</h4>

                            {/* Tech List */}
                            <p className="mt-3">HTML5, CSS3, Bootstrap, JavaScript, Handlebars.js, Node.js, Express, Dotenv, Bycrypt, Charts.js</p>

                        </div>

                        {/* Links */}
                        <div className="flex mt-5 justify-between">

                            {/* GitHub Repo */}
                            <a
                                href="https://github.com/ggorosave/No-Budge-Budget-Tracker"
                                rel="noreferrer"
                                target="_blank"
                                className="block text-primary border-primary border-2 px-2 py-1 rounded-3xl"
                            >
                                <i className="fa-brands fa-github mr-2 text-lg"></i>
                                GitHub
                            </a>

                            {/* Webpage */}
                            <a
                                href="https://no-budge.herokuapp.com/"
                                rel="noreferrer"
                                target="_blank"
                                className="block text-primary border-primary border-2 px-2 py-1 rounded-3xl"
                            >
                                <i className="fa-solid fa-up-right-from-square mr-2 text-lg"></i>
                                Webpage
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
};