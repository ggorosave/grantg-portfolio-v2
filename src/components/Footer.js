import React from "react";

export default function Footer() {

    return (
        <div>
            <ul className="list-none flex justify-center mx-2 my-5">
                <li>
                    <a
                        href="https://github.com/ggorosave"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className="fa-brands fa-square-github text-quaternary text-5xl mx-3"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/grantgorosave/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className="fa-brands fa-linkedin text-quaternary text-5xl mx-3"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/GorosaveGrant"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className="fa-brands fa-square-twitter text-quaternary text-5xl mx-3"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}