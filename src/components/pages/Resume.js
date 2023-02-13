import React from "react";

export default function Resume() {

    return (
        <div className="mt-32 mx-3 bg-secondary rounded-lg">

            {/* Link to download resume */}
            <a
                href="https://docs.google.com/document/d/1SX0MEQhhCm-Nw9SSEKVfDXpaM3W1D2EZr0psMSdF6UI/edit?usp=sharing"
                target="
            "
                rel="noreferrer"
                className="bg-quaternary ml-3 mt-3"
            >
                View Resume
            </a>

            {/* List of proficencies */}
            <div className="flex">
                {/* Front End Proficiencies */}
                <div className="bg-quaternary m-3 p-3 rounded-lg w-3/6">
                    <h3 className="text-xl font-semibold">Front End Proficiencies:</h3>
                    <ul className="list-disc ml-6 text-lg">
                        <li>
                            React
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            Tailwind
                        </li>
                        <li>
                            Handlebars.js
                        </li>
                    </ul>
                </div>

                {/* Back End Proficiencies */}
                <div className="bg-quaternary m-3 p-3 rounded-lg w-3/6">
                    <h3 className="text-xl font-semibold">Back End Proficiencies:</h3>
                    <ul className="list-disc ml-6 text-lg ">
                        <li>
                            Node.js
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MongoDB
                        </li>
                        <li>
                            Mongoose
                        </li>
                        <li>
                            Apollo Server
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            Sequelize
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
};