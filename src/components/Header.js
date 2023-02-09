import React from "react";
import Navbar from "./Navbar";

export default function Header() {

    return (
        <header className="container fixed">
            <h1 className="bg-secondary text-quaternary text-4xl ssp font-semibold m-2 p-2 rounded-md text-center md:text-left">Grant's Portfolio</h1>
            <Navbar />
        </header>
    )
}