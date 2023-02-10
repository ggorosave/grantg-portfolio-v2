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
            <section className="bg-secondary p-5 flex grow h-screen w-full md:w-auto md:rounded-r-lg md:rounded-bl-lg">
                <div className="bg-quaternary grow rounded-lg">

                    {/* Project Image */}
                    <figure>
                        <img
                            className="w-72 my-5 mx-auto rounded-lg"
                            src="/images/manage-transactions.JPG"
                            alt="web application that displays budget tables"
                        />
                    </figure>
                    <h3>No Budge Budget Tracker</h3>

                </div>
            </section>
        </div>
    )
};