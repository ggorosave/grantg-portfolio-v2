import React from "react"

export default function Navbar({ currentPage, handlePageChange }) {

    return (
        <nav>
            <ul className="list-none flex justify-around md:justify-end mx-2">
                <li>
                    <a
                        className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl hover:bg-primary hover:text-quaternary hover:border-2 hover:border-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:bg-tertiary"
                        href="/"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl hover:bg-primary hover:text-quaternary hover:border-2 hover:border-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:bg-tertiary"
                        href="/projects"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl hover:bg-primary hover:text-quaternary hover:border-2 hover:border-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:bg-tertiary"
                        href="/resume"
                    >
                        Resume
                    </a>
                </li>
                <li>
                    <a
                        className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl hover:bg-primary hover:text-quaternary hover:border-2 hover:border-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:bg-tertiary"
                        href="/contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}