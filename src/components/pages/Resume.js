import React from "react";

export default function Resume() {

    return (
        <div className="mt-32 mx-auto bg-secondary text-primary rounded-lg flex flex-col w-fit">

            {/* List of proficencies */}
            <div className="flex flex-col md:flex-row">
                {/* Front End Proficiencies */}
                <div className="bg-quaternary m-3 p-3 rounded-lg">
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
                <div className="bg-quaternary m-3 p-3 rounded-lg">
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

            {/* Link to download resume */}
            <a
                href="https://docs.google.com/document/d/19QbNGixKBCBFlSWULJdnwBkiq8_KGJrGhZWoXlSYZs4/edit?usp=sharing"
                target="
            "
                rel="noreferrer"
                className="bg-quaternary text-lg font-semibold block mx-auto mb-3 py-1 px-3 w-fit rounded-3xl self-end"
            >
                <i class="fa-brands fa-google-drive mr-2"></i>
                View Full Resume
            </a>

        </div>
    )
};