// import React from "react"

export default function Navbar() {

    return (
        <nav>
            <ul className="list-none flex justify-around md:justify-end mx-2">
                <li>
                    <a className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl" href="#">About</a>
                </li>
                <li>
                    <a className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl" href="#">Projects</a>
                </li>
                <li>
                    <a className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl" href="#">Resume</a>
                </li>
                <li>
                    <a className="bg-quaternary text-primary ssp text-lg md:text-xl font-semibold align-middle px-3 md:px-4 py-1 mx-1 my-2 rounded-2xl" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}