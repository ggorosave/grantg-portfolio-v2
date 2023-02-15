import React from "react";

export default function Resume() {

    // Code written using help from the source below
    // SOURCE: https://www.geeksforgeeks.org/how-to-download-pdf-file-in-reactjs/
    const downloadFile = () => {

        // fetch request targeting the document in the public folder
        fetch('/docs/Grant Gorosave_Web Dev Resume.pdf')
            .then(response => {
                // creates a blob-->blobs can represent data that isn't a javascript native format, like the resume file
                response.blob().then(blob => {

                    // creates a URL that represents the object in the parameters, i.e. the pdf
                    const resumeUrl = window.URL.createObjectURL(blob);

                    // creates a link element
                    let downloadLink = document.createElement('a');

                    // sets the href of the link to the resume url created above
                    downloadLink.href = resumeUrl;

                    // downloads the file using the download function of the downloads API
                    downloadLink.download = '/docs/Grant Gorosave_Web Dev Resume.pdf'

                    // fires a click of the link object created in this function
                    downloadLink.click();
                })
            })
    }

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
            <button
                className="bg-quaternary text-lg font-semibold block mx-auto mb-3 py-1 px-3 w-fit rounded-3xl self-end active:bg-primary active:text-quaternary  focus:bg-primary focus:text-quaternary hover:bg-primary hover:text-quaternary hover:transition-colors hover:duration-150 hover:ease-out active:scale-90 active:bg-tertiary"
                onClick={downloadFile}
            >
                <i className="fa-solid fa-download mr-2"></i>
                Download Resume
            </button>

        </div>
    )
};